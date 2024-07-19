import { defineEventHandler } from 'h3'
import { fetchPostsToPublishFromNotion } from '../services/notionService'

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
