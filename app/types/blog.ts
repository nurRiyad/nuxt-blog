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
  title?: string
  description?: string
  body?: {
    toc?: {
      links?: Array<{ id: string; text: string }>
    }
    [key: string]: unknown
  }
  meta?: {
    date?: string
    image?: string
    alt?: string
    ogImage?: string
    tags?: string[]
    published?: boolean
    [key: string]: unknown
  }
  seo?: {
    title?: string
    description?: string
    [key: string]: unknown
  }
  ogImage?: string
  [key: string]: unknown
}
