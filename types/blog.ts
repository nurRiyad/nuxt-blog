import type { Author } from '@/types/author'

export interface BlogPost {
  notionId: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: string[]
  authors: Author[]
  published: boolean
  content: string
}
