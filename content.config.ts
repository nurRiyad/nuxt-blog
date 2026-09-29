import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asRobotsCollection } from '@nuxtjs/robots/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'
import { defineOgImageSchema } from 'nuxt-og-image/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      ...asRobotsCollection({
        type: 'page',
        source: 'blogs/**/*.md',
      }),
      ...asSitemapCollection({
        type: 'page',
        source: 'blogs/**/*.md',
      }),
      schema: z.object({
        ...defineOgImageSchema().shape,
        title: z.string(),
        date: z.string(),
        description: z.string(),
        image: z.string(),
        alt: z.string(),
        ogImage: z.string(),
        tags: z.array(z.string()),
        published: z.boolean(),
      }),
    }),
  },
})
