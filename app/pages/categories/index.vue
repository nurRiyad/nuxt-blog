<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

const { data } = await useAsyncData('all-blog-post-by-category', () => queryCollection('content').all())
const title = 'Categories'
const description = 'Below are the topics I have written about or plan to cover in future blog posts.'

const allTags = new Map()

data.value?.forEach((blog) => {
  const tags: Array<string> = (blog.meta.tags as string[]) || []
  tags.forEach((tag) => {
    if (allTags.has(tag)) {
      const cnt = allTags.get(tag)
      allTags.set(tag, cnt + 1)
    } else {
      allTags.set(tag, 1)
    }
  })
})

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage('Test', {
  headline: siteData.name,
  title,
  description,
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <CategoryCard v-for="topic in allTags" :key="topic[0]" :title="makeFirstCharUpper(topic[0])" :count="topic[1]" />
    </div>
  </main>
</template>
