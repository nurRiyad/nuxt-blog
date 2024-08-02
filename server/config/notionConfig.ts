import process from 'node:process'

const config = useRuntimeConfig()

export const NOTION_API_KEY = config.notion.apiKey
export const DATABASE_POSTS_ID = config.notion.databasePostsId

if (!NOTION_API_KEY || !DATABASE_POSTS_ID) {
  console.error('The environment variables NOTION_API_KEY and NOTION_DATABASE_ID must be defined.')
  process.exit(1)
}
