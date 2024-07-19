import { Client } from '@notionhq/client'
import { DATABASE_POSTS_ID, NOTION_API_KEY } from '../config/notionConfig'
import type { NotionBlock, NotionPage } from '../../types/notion'

const notion = new Client({ auth: NOTION_API_KEY })

export async function fetchPostsToPublishFromNotion(): Promise<any[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_POSTS_ID,
      filter: {
        property: 'Status',
        status: { equals: 'To Publish' },
      },
    })

    return Promise.all(response.results.map((result: any) => getPageContent(result as NotionPage)))
  }
  catch (error) {
    console.error('Erreur lors de la récupération des articles :', error)
    throw error
  }
}

async function getPageContent(page: NotionPage): Promise<{ id: string; title: string; content: string }> {
  try {
    const blocks = await notion.blocks.children.list({ block_id: page.id })
    const markdownContent = convertBlocksToMarkdown(blocks.results as NotionBlock[])

    return {
      id: page.id,
      title: extractTitleFromPage(page),
      content: markdownContent,
    }
  }
  catch (error) {
    console.error('Erreur lors de la récupération de la page:', error)
    throw error
  }
}

function convertBlocksToMarkdown(blocks: NotionBlock[]): string {
  const blockToMarkdown: { [key: string]: (block: any) => string } = {
    paragraph: (block: any) => `${extractText(block.paragraph)}\n\n`,
    heading_1: (block: any) => `# ${extractText(block.heading_1)}\n\n`,
    heading_2: (block: any) => `## ${extractText(block.heading_2)}\n\n`,
    heading_3: (block: any) => `### ${extractText(block.heading_3)}\n\n`,
    bulleted_list_item: (block: any) => `- ${extractText(block.bulleted_list_item)}\n`,
    numbered_list_item: (block: any) => `1. ${extractText(block.numbered_list_item)}\n`,
    code: (block: any) => codeToMarkdown(block),
    image: (block: any) => imageToMarkdown(block),
  }

  return blocks.map(block => blockToMarkdown[block.type]?.(block) || '').join('')
}

function extractText(blockContent: any): string {
  return blockContent?.rich_text.map((text: any) => text.plain_text).join('')
}

function codeToMarkdown(block: any): string {
  const language = block.code?.language || ''
  const code = extractText(block.code)
  return `\`\`\`${language}\n${code}\n\`\`\`\n\n`
}

function imageToMarkdown(block: any): string {
  const imageUrl = block.image?.file?.url || block.image?.external?.url || ''
  return `![Image](${imageUrl})\n\n`
}

function extractTitleFromPage(page: NotionPage): string {
  return page.properties?.Name?.title[0]?.plain_text || 'Sans titre'
}
