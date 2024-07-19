import { Client } from '@notionhq/client'
import { DATABASE_POSTS_ID, NOTION_API_KEY } from '../config/notionConfig'
import type { NotionBlock, NotionPage } from '../../types/notion'

const notion = new Client({ auth: NOTION_API_KEY })

export async function fetchPostsToPublishFromNotion() {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_POSTS_ID,
      filter: {
        property: 'Status',
        status: {
          equals: 'To Publish',
        },
      },
    })

    return Promise.all(response.results.map(result => getPageContent(result as NotionPage)))
  }
  catch (error) {
    console.error('Erreur lors de la récupération des articles :', error)
    throw error
  }
}

async function getPageContent(page: NotionPage) {
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

// function extractContentFromBlocks(blocks: NotionBlock[]) {
//   return blocks
//     .map((block) => {
//       if (block.type === 'paragraph' && block.paragraph)
//         return block.paragraph.rich_text.map(text => text.plain_text).join('')
//       return ''
//     })
//     .join('\n\n')
// }

function convertBlocksToMarkdown(blocks: NotionBlock[]): string {
  return blocks.map((block) => {
    switch (block.type) {
      case 'paragraph':
        return `${block.paragraph?.rich_text.map(text => text.plain_text).join('')}\n\n`
      case 'heading_1':
        return `# ${block.heading_1?.rich_text.map(text => text.plain_text).join('')}\n\n`
      case 'heading_2':
        return `## ${block.heading_2?.rich_text.map(text => text.plain_text).join('')}\n\n`
      case 'heading_3':
        return `### ${block.heading_3?.rich_text.map(text => text.plain_text).join('')}\n\n`
      case 'bulleted_list_item':
        return `- ${block.bulleted_list_item?.rich_text.map(text => text.plain_text).join('')}\n`
      case 'numbered_list_item':
        return `1. ${block.numbered_list_item?.rich_text.map(text => text.plain_text).join('')}\n`
      case 'code':
        return `\`\`\`${block.code?.language || ''}
${block.code?.rich_text.map((text: any) => text.plain_text).join('')}
\`\`\`\n\n`
      case 'image': {
        const imageUrl = block.image?.file?.url || block.image?.external?.url || ''
        return `![Image](${imageUrl})\n\n`
      }
      default:
        return ''
    }
  }).join('')
}

function extractTitleFromPage(page: NotionPage) {
  return page.properties?.Name?.title[0]?.plain_text || 'Sans titre'
}
