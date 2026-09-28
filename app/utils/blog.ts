import type { BlogPost, ContentItem } from '~/types/blog'

export function toBlogCardPost(article: ContentItem, imageFallback = '/not-found.jpg'): BlogPost & { path: string } {
  const meta = article.meta || {}

  return {
    path: article.path,
    title: article.title || 'no-title available',
    description: article.description || 'no-description available',
    image: meta.image || imageFallback,
    alt: meta.alt || 'no alter data available',
    ogImage: meta.ogImage || imageFallback,
    date: meta.date || 'not-date-available',
    tags: meta.tags || [],
    published: meta.published || false,
  }
}
