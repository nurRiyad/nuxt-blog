import type { Person } from '@/types/person'

export interface BlogPost {
  notionId: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: string[]
  authors: Person[]
  reviewers: Person[]
  published: boolean
  content: string
}

export interface PageContent {
  notionId: string
  title: string
  content: string
  authors: Person[]
  images: { url: string; alt: string }[]
  tags: string[]
  reviewers?: Person[]
}
