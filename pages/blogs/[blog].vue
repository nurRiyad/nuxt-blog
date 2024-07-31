<script setup lang="ts">
import type { Person } from '@/types/person'

const { path } = useRoute()

const { data: article, error } = await useAsyncData(`blog-post-${path}`, () => {
  return queryContent(path).findOne()
})

if (error.value) {
  console.error('Error fetching article:', error.value)
  navigateTo('/404')
}

const blogPostProps = computed(() => {
  return {
    title: article.value?.title || 'no-title available',
    description: article.value?.description || 'no-description available',
    image: article.value?.image || '/not-found.jpg',
    alt: article.value?.alt || 'no alter data available',
    ogImage: article.value?.ogImage || '/not-found.jpg',
    date: article.value?.date || 'not-date-available',
    tags: article.value?.tags || [],
    published: article.value?.published || false,
  }
})

const authors: Person[] = article.value?.authors || []
const reviewers: Person[] = article.value?.reviewers || []

useHead({
  title: blogPostProps.value.title || '',
  meta: [
    { name: 'description', content: blogPostProps.value.description },
    { property: 'og:site_name', content: 'Blog HoppR' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `https://blog.hoppr.tech/${path}`,
    },
    {
      property: 'og:title',
      content: blogPostProps.value.title,
    },
    {
      property: 'og:description',
      content: blogPostProps.value.description,
    },
    {
      property: 'og:image',
      content: blogPostProps.value.ogImage || blogPostProps.value.image,
    },
    { name: 'twitter:site', content: '@HoppR_Tech' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `https://blog.hoppr.tech/${path}`,
    },
    {
      name: 'twitter:title',
      content: blogPostProps.value.title,
    },
    {
      name: 'twitter:description',
      content: blogPostProps.value.description,
    },
    {
      name: 'twitter:image',
      content: blogPostProps.value.ogImage || blogPostProps.value.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://blog.hoppr.tech/${path}`,
    },
  ],
})

// Generate OG Image
defineOgImageComponent('Test', {
  headline: 'Bienvenue 👋',
  title: blogPostProps.value.title || '',
  description: blogPostProps.value.description || '',
  link: blogPostProps.value.ogImage,
})
</script>

<template>
  <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12 ">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :title="blogPostProps.title"
        :image="blogPostProps.image"
        :alt="blogPostProps.alt"
        :date="blogPostProps.date"
        :description="blogPostProps.description"
        :tags="blogPostProps.tags"
        :authors="authors"
      />
      <div>
        <h3>Reviewers:</h3>
        <ul>
          <li v-for="reviewer in reviewers" :key="reviewer.notionId">
            {{ reviewer.name }}
          </li>
        </ul>
      </div>
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer v-if="article" :value="article">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
      <BlogFooter :authors="authors" />
    </div>
    <BlogToc />
  </div>
</template>
