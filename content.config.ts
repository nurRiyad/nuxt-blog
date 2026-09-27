import { defineCollection, defineContentConfig } from '@nuxt/content'
import { asRobotsCollection } from '@nuxtjs/robots/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'
import { defineOgImageSchema } from 'nuxt-og-image/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      ...asRobotsCollection({
        type: 'page',
        source: '**/*.md',
      }),
      ...asSitemapCollection({
        type: 'page',
        source: '**/*.md',
      }),
      schema: defineOgImageSchema(),
    }),
  },
})
