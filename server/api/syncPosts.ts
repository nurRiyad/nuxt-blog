import { defineEventHandler } from 'h3'
import { fetchPostsToPublishFromNotion } from '@/server/services/notionService'
import { pushToGitHub } from '@/server/services/githubService'

export default defineEventHandler(async (event) => {
  try {
    const postsToPublish = await fetchPostsToPublishFromNotion()

    for (const post of postsToPublish)
      await pushToGitHub(post)

    return { posts: postsToPublish, message: 'Articles publiés avec succès sur GitHub' }
  }
  catch (error) {
    console.error('Erreur lors de la synchronisation des articles :', error)
    return { error: 'Erreur lors de la synchronisation des articles' }
  }
})
