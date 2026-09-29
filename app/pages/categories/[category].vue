<script lang="ts" setup>
import type { BlogPost } from '@/types/blog'
import type { ContentItem } from '~/types/blog'
import { toBlogCardPost } from '~/utils/blog'
const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name)) strName = name.at(0) || ''
  else strName = name
  return strName
})

const { data } = await useAsyncData(`category-data-${category.value}`, () =>
  queryCollection('content')
    .all()
    .then((articles) =>
      articles.filter((article) => {
        const tags = (article as ContentItem).tags
        return Array.isArray(tags) && tags.includes(category.value)
      }),
    ),
)

const formattedData = computed(() => {
  return data.value?.map((article) => toBlogCardPost(article as ContentItem, '/blogs-img/blog.jpg'))
})
const title = computed(() => category.value.toUpperCase())
const description = computed(() => `You will find all the ${category.value} related posts here.`)

useHead({
  title: category.value,
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
  <main class="container max-w-5xl mx-auto text-zinc-600 px-4">
    <CategoryTopic />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="post in formattedData"
        :key="post.title"
        :path="post.path"
        :title="post.title"
        :date="post.date"
        :description="post.description"
        :image="post.image"
        :alt="post.alt"
        :og-image="post.ogImage"
        :tags="post.tags"
        :published="post.published"
      />
      <BlogEmpty v-if="data?.length === 0" />
    </div>
  </main>
</template>
