<script lang="ts" setup>
import type { BlogPost, ContentItem } from '~/types/blog'
import { toBlogCardPost } from '~/utils/blog'

// Parse dates in the format "1st Mar 2023" and skip content without a valid date.
function parseCustomDate(dateValue: unknown): Date | null {
  if (typeof dateValue !== 'string') return null

  const date = new Date(dateValue.replace(/(\d+)(st|nd|rd|th)\b/g, '$1'))
  return Number.isNaN(date.getTime()) ? null : date
}

// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData('recent-post', () =>
  queryCollection('content')
    .all()
    .then((data) => {
      return data
        .flatMap((post) => {
          const meta = post.meta as unknown as BlogPost
          const date = parseCustomDate(meta.date)
          return meta.published && date ? [{ post, date }] : []
        })
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, 3)
        .map(({ post }) => post)
    }),
)

const formattedData = computed(() => {
  return data.value?.map((article) => toBlogCardPost(article as ContentItem))
})

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
    },
  ],
})
</script>

<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300" />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300">Recent Post</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="post in formattedData" :key="post.title">
        <BlogCard
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
      </template>
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>
