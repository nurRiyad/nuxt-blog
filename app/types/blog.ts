export interface BlogPost {
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: string[]
  published: boolean
}

export interface ContentItem {
  path: string
  title?: unknown
  description?: unknown
  date?: string
  image?: string
  alt?: string
  body?: {
    toc?: {
      links?: Array<{ id: string; text: string }>
    }
    [key: string]: unknown
  }
  meta?: Record<string, unknown>
  seo?: {
    title?: string
    description?: string
    [key: string]: unknown
  }
  ogImage?: string
  tags?: string[]
  published?: boolean
  [key: string]: unknown
}
