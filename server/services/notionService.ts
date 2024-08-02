import { Client } from '@notionhq/client'
import { getPageContent } from '@/utils/notionUtils'
import { DATABASE_POSTS_ID, NOTION_API_KEY } from '@/server/config/notionConfig'
import type { NotionPage } from '@/types/notion'
import type { BlogPost } from '@/types/blog'

const notionClient = new Client({ auth: NOTION_API_KEY })

export async function fetchPostsToPublishFromNotion(): Promise<BlogPost[]> {
  try {
    const response = await notionClient.databases.query({
      database_id: DATABASE_POSTS_ID,
      filter: {
        property: 'Status',
        status: { equals: 'To Publish' },
      },
    })

    const blogPosts = await Promise.all(response.results.map((result: any) => getPageContent(notionClient, result as NotionPage)))
    return blogPosts.map((post): BlogPost => ({
      ...post,
      date: new Date().toISOString(),
      description: post.content.replace(/#.*\n/g, '').replace(/\n/g, ' ').substring(0, 200), // Supprime les titres et les retours à la ligne, puis utilise les 200 premiers caractères comme description
      image: post.coverImage,
      alt: post.coverImageAlt,
      tags: post.tags,
      ogImage: post.coverImage,
      published: true,
      authors: post.authors,
      reviewers: post.reviewers || [],
    }))
  }
  catch (error) {
    console.error('Erreur lors de la récupération des articles :', error)
    throw error
  }
}

export async function updatePostStatusInNotion(pageId: string, newStatus: string): Promise<void> {
  try {
    await notionClient.pages.update({
      page_id: pageId,
      properties: {
        Status: {
          status: {
            name: newStatus,
          },
        },
      },
    })
  }
  catch (error) {
    console.error('Erreur lors de la mise à jour du statut dans Notion :', error)
    throw error
  }
}
