<script setup lang="ts">
import type { BlogPost, ContentItem } from '@/types/blog'
import { navbarData, seoData } from '~/data'
import { toBlogCardPost } from '~/utils/blog'

const { path } = useRoute()
const siteUrl = seoData.mySite

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => queryCollection('content').path(path).first())

if (error.value) navigateTo('/404')

// Get previous and next post navigation
const { previousPost, nextPost } = await useBlogNavigation(path)

const data = computed<BlogPost>(() => toBlogCardPost(articles.value as ContentItem))

// Calculate reading time based on word count (average 200 words per minute)
const readingTime = computed(() => {
  const article = articles.value as ContentItem | null
  const body = article?.body
  if (!body) return '1 min read'

  // More stable word count calculation
  const text = JSON.stringify(body)
  const wordCount = text.split(/\s+/).length
  const minutes = Math.ceil(wordCount / 200)

  return `${minutes} min read`
})

const tocLinks = computed(() => (articles.value as ContentItem | null)?.body?.toc?.links || [])

useHead({
  title: data.value.title || '',
  meta: [
    { name: 'description', content: data.value.description },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: navbarData.homeTitle },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `${siteUrl}${path}`,
    },
    {
      property: 'og:title',
      content: data.value.title,
    },
    {
      property: 'og:description',
      content: data.value.description,
    },
    {
      property: 'og:image',
      content: data.value.ogImage || data.value.image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: seoData.twitterHandle },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `${siteUrl}${path}`,
    },
    {
      name: 'twitter:title',
      content: data.value.title,
    },
    {
      name: 'twitter:description',
      content: data.value.description,
    },
    {
      name: 'twitter:image',
      content: data.value.ogImage || data.value.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}${path}`,
    },
  ],
})

// Generate OG Image
defineOgImage('Test', {
  headline: seoData.title,
  title: data.value.title,
  description: data.value.description,
  link: data.value.ogImage,
})
</script>

<template>
  <div>
    <div class="px-6 container max-w-5xl mx-auto">
      <div>
        <BlogHeader
          :title="data.title"
          :image="data.image"
          :alt="data.alt"
          :date="data.date"
          :description="data.description"
          :tags="data.tags"
          :reading-time="readingTime"
        />
        <div
          class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
        >
          <ContentRenderer v-if="articles" :value="articles">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </div>
      </div>

      <div class="flex flex-row flex-wrap md:flex-nowrap mt-10 gap-2">
        <ClientOnly>
          <SocialShare
            v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
            :key="network"
            :network="network"
            :styled="true"
            :label="true"
            class="p-1"
            aria-label="Share with {network}"
          />
        </ClientOnly>
      </div>

      <!-- Previous and Next Blog Navigation -->
      <BlogNavigation :previous-post="previousPost" :next-post="nextPost" />
    </div>

    <!-- TOC positioned outside main content area -->
    <ClientOnly>
      <Teleport to="body">
        <BlogToc :links="tocLinks" />
      </Teleport>
    </ClientOnly>
  </div>
</template>
