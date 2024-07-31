import type { Client } from '@notionhq/client'
import type { NotionBlock, NotionPage } from '@/types/notion'
import type { Author } from '@/types/author'

export function safeGetProperty(obj: any, path: string[], defaultValue: any = undefined) {
  return path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : defaultValue, obj)
}

export function convertBlocksToMarkdown(blocks: NotionBlock[]): { markdownContent: string; images: { url: string; alt: string }[] } {
  const images: { url: string; alt: string }[] = []
  const blockToMarkdown: { [key: string]: (block: any) => string } = {
    paragraph: (block: any) => `${extractText(block.paragraph)}\n\n`,
    heading_1: (block: any) => `# ${extractText(block.heading_1)}\n\n`,
    heading_2: (block: any) => `## ${extractText(block.heading_2)}\n\n`,
    heading_3: (block: any) => `### ${extractText(block.heading_3)}\n\n`,
    bulleted_list_item: (block: any) => `- ${extractText(block.bulleted_list_item)}\n`,
    numbered_list_item: (block: any) => `1. ${extractText(block.numbered_list_item)}\n`,
    code: (block: any) => codeToMarkdown(block),
    image: (block: any) => {
      const imageUrl = block.image?.file?.url || block.image?.external?.url || ''
      const altText = block.image?.caption?.[0]?.plain_text || ''
      images.push({ url: imageUrl, alt: altText })
      return `![${altText}](${imageUrl})\n\n`
    },
  }

  const markdownContent = blocks.map(block => blockToMarkdown[block.type]?.(block) || '').join('')
  return { markdownContent, images }
}

export function extractTitleFromPage(page: NotionPage): string {
  const titleProperty = page.properties.Post as { title: Array<{ plain_text: string }> }
  return titleProperty?.title[0]?.plain_text || 'Sans titre'
}

function extractText(blockContent: any): string {
  return blockContent?.rich_text.map((text: any) => text.plain_text).join('')
}

function codeToMarkdown(block: any): string {
  const language = block.code?.language || ''
  const code = extractText(block.code)
  return `\`\`\`${language}\n${code}\n\`\`\`\n\n`
}

export async function getAuthorsInfo(notionClient: Client, authorIds: string[]): Promise<Author[]> {
  const authors: Author[] = []
  const promises = authorIds.map(async (id) => {
    const authorPage = await notionClient.pages.retrieve({ page_id: id })
    return {
      notionId: authorPage.id,
      name: safeGetProperty(authorPage, ['properties', 'Name', 'title', '0', 'plain_text'], 'Auteur inconnu'),
      image: safeGetProperty(authorPage, ['properties', 'Avatar', 'files', '0', 'file', 'url'], ''),
      linkedin: safeGetProperty(authorPage, ['properties', 'LinkedIn', 'url']),
      x: safeGetProperty(authorPage, ['properties', 'X', 'url']),
    }
  })
  authors.push(...await Promise.all(promises))
  return authors
}

export async function getPageContent(notionClient: Client, page: NotionPage): Promise<{ notionId: string; title: string; content: string; authors: Author[]; images: { url: string; alt: string }[] }> {
  try {
    const blocks = await notionClient.blocks.children.list({ block_id: page.id })
    const { markdownContent, images } = convertBlocksToMarkdown(blocks.results as NotionBlock[])
    const authorsProperty = page.properties.Authors as { relation?: { id: string }[] }
    const authorIds = authorsProperty.relation?.map(author => author.id) || []
    const authors = await getAuthorsInfo(notionClient, authorIds)

    return {
      notionId: page.id,
      title: extractTitleFromPage(page),
      content: markdownContent,
      authors,
      images,
    }
  }
  catch (error) {
    console.error('Erreur lors de la récupération de la page:', error)
    throw error
  }
}
