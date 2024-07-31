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
      date: new Date().toISOString(), // Ajoutez une date par défaut ou récupérez-la depuis Notion si disponible
      description: post.content.substring(0, 200), // Utilisez les 200 premiers caractères du contenu comme description
      image: post.images[0]?.url || '', // Utilisez la première image comme image principale, ou une chaîne vide si aucune image n'est disponible
      alt: post.images[0]?.alt || '', // Utilisez l'alt de la première image, ou une chaîne vide si non disponible
      tags: [],
      ogImage: '',
      published: true,
      authors: post.authors,
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
