import type { BlogPost, ContentItem } from '~/types/blog'

export function toBlogCardPost(article: ContentItem, imageFallback = '/not-found.jpg'): BlogPost & { path: string } {
  return {
    path: article.path,
    title: typeof article.title === 'string' ? article.title : article.seo?.title || 'no-title available',
    description:
      typeof article.description === 'string' ? article.description : article.seo?.description || 'no-description available',
    image: typeof article.image === 'string' ? article.image : imageFallback,
    alt: typeof article.alt === 'string' ? article.alt : 'no alter data available',
    ogImage: typeof article.ogImage === 'string' ? article.ogImage : imageFallback,
    date: typeof article.date === 'string' ? article.date : 'not-date-available',
    tags: Array.isArray(article.tags) ? article.tags.filter((tag): tag is string => typeof tag === 'string') : [],
    published: article.published === true,
  }
}
