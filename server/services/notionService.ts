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
    const content = extractContentFromBlocks(blocks.results as NotionBlock[])

    return {
      id: page.id,
      title: extractTitleFromPage(page),
      content,
    }
  }
  catch (error) {
    console.error('Erreur lors de la récupération de la page:', error)
    throw error
  }
}

function extractContentFromBlocks(blocks: NotionBlock[]) {
  return blocks
    .map((block) => {
      if (block.type === 'paragraph' && block.paragraph)
        return block.paragraph.rich_text.map(text => text.plain_text).join('')
      return ''
    })
    .join('\n\n')
}

function extractTitleFromPage(page: NotionPage) {
  return page.properties?.Name?.title[0]?.plain_text || 'Sans titre'
}
