import { defineEventHandler } from 'h3'
import { fetchPostsToPublishFromNotion } from '@/server/services/notionService'
import { publishPostToGitHub } from '@/server/services/githubService'

export default defineEventHandler(async (event) => {
  try {
    const postsToPublish = await fetchPostsToPublishFromNotion()

    if (postsToPublish.length === 0)
      return { message: 'No articles to publish.' }

    await Promise.all(postsToPublish.map(post => publishPostToGitHub(post)))

    return { posts: postsToPublish, message: '✅ Articles successfully published on GitHub' }
  }
  catch (error) {
    console.error('❌ Error while synchronizing articles:', error)
    return { error: `❌ Error while synchronizing articles.\n${error}` }
  }
})
