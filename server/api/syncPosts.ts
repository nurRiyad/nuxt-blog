import { defineEventHandler } from 'h3'
import { Client } from '@notionhq/client'

const NOTION_API_KEY = 'secret_dJ1w4bjbfs7j5Ogzt4OFHeBsKTSo6pZVf3zwSyK7pcy'
const DATABASE_ID = 'cc3d5da28fc54ad982362d663b51e129'

const notion = new Client({ auth: NOTION_API_KEY })

async function fetchPostsToPublishFromNotion() {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Status',
        status: {
          equals: 'To Publish',
        },
      },
    })

    const posts = await Promise.all(response.results.map(async (page: any) => {
      const pageContent = await getPageContent(page.id)
      return {
        id: page.id,
        title: pageContent.title,
        content: pageContent.content,
        // Ajoutez d'autres propriétés selon vos besoins
      }
    }))

    return posts
  }
  catch (error) {
    console.error('Erreur lors de la récupération des articles :', error)
    throw error
  }
}

async function getPageContent(pageId: string) {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId })
    const blocks = await notion.blocks.children.list({ block_id: pageId })

    const content = blocks.results.map((block: any) => {
      if (block.type === 'paragraph')
        return block.paragraph.rich_text.map((text: any) => text.plain_text).join('')

      // Ajoutez d'autres types de blocs selon vos besoins (listes, titres, etc.)
      return ''
    }).join('\n\n')

    return {
      title: (page as any).properties?.Name?.title[0]?.plain_text || 'Sans titre',
      content,
    }
  }
  catch (error) {
    console.error('Erreur lors de la récupération de la page:', error)
    throw error
  }
}

export default defineEventHandler(async (event) => {
  try {
    const postsToPublish = await fetchPostsToPublishFromNotion()
    return { posts: postsToPublish }
  }
  catch (error) {
    console.error('Erreur lors de la récupération des articles :', error)
    return { error: 'Erreur lors de la récupération des articles' }
  }
})
