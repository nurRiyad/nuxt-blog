<script setup lang="ts">
import type { BlogPost } from '@/types/blog'

import type { Author } from '@/types/author'

const runtimeConfig = useRuntimeConfig()

const BASE_URL = runtimeConfig.public.baseUrl

const { path } = useRoute()

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => queryContent(path).findOne())

if (error.value)
  navigateTo('/404')

const blogPostProps = computed<BlogPost>(() => {
  return {
    title: articles.value?.title || 'no-title available',
    description: articles.value?.description || 'no-description available',
    image: articles.value?.image || '/not-found.jpg',
    alt: articles.value?.alt || 'no alter data available',
    ogImage: articles.value?.ogImage || '/not-found.jpg',
    date: articles.value?.date || 'not-date-available',
    tags: articles.value?.tags || [],
    published: articles.value?.published || false,
    authorId: articles.value?.authorId || 0,
  }
})

const papa = usePapaParse()
const author = await fetchAuthor(blogPostProps.value.authorId)

async function fetchAuthor(id: number): Promise<Author> {
  const csvUrl = `${BASE_URL}/config/authors.csv`

  let author: Author = {
    id: 0,
    name: 'Anonymous',
    surname: 'M.',
  }

  try {
    const response = await fetch(csvUrl)
    if (!response.ok)
      throw new Error('Failed to load the authors CSV')
    const csvText = await response.text()

    papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result: { data: Author[] }) => {
        const authors: Author[] = result.data
        const foundAuthor = authors.find(author => author.id === id)
        author = foundAuthor || author
      },
    })
  }
  catch (error) {
    console.error('Error fetching or parsing authors CSV:', error)
  }

  return author
}

useHead({
  title: blogPostProps.value.title || '',
  meta: [
    { name: 'description', content: blogPostProps.value.description },
    {
      name: 'description',
      content: blogPostProps.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
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
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
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
defineOgImageComponent('Blog', {
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
        :title="blogPostProps.title" :image="blogPostProps.image" :alt="blogPostProps.alt" :date="blogPostProps.date"
        :description="blogPostProps.description" :tags="blogPostProps.tags" :author="author"
      />
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
      <BlogFooter :author="author" />
    </div>
    <BlogToc />
  </div>
</template>
