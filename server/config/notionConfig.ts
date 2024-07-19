import process from 'node:process'

const config = useRuntimeConfig()

export const NOTION_API_KEY = config.notion.apiKey
export const DATABASE_POSTS_ID = config.notion.databasePostsId

if (!NOTION_API_KEY || !DATABASE_POSTS_ID) {
  console.error('Les variables d\'environnement NOTION_API_KEY et NOTION_DATABASE_ID doivent être définies.')
  process.exit(1)
}
