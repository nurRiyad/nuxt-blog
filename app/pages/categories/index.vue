<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

const { data } = await useAsyncData('all-blog-post-by-category', () => queryCollection('content').all())
const title = 'Categories'
const description = 'Below are the topics I have written about or plan to cover in future blog posts.'

const allTags = computed(() => {
  const counts = new Map<string, number>()

  data.value?.forEach((blog) => {
    blog.tags?.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1))
  })

  return counts
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
