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

const data = computed<BlogPost>(() => toBlogCardPost(articles.value as ContentItem, '/not-found.jpg'))

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
    <div class="px-6 container max-w-5xl mx-auto mt-4 sm:mt-6">
      <div>
        <article
          class="min-w-0 rounded-2xl border border-zinc-200/80 bg-white/65 px-5 py-6 shadow-sm sm:px-8 sm:py-8 dark:border-slate-800/80 dark:bg-slate-900/45 md:px-10 md:py-10"
        >
          <BlogHeader
            :title="data.title"
            :image="data.image"
            :alt="data.alt"
            :date="data.date"
            :description="data.description"
            :tags="data.tags"
            :reading-time="readingTime"
          />
          <BlogToc :links="tocLinks" />
          <div
            class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-pre:bg-zinc-100 prose-pre:text-zinc-800 dark:prose-pre:bg-zinc-900 dark:prose-pre:text-zinc-100 prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-none prose-zinc dark:prose-invert prose-img:rounded-xl"
          >
            <ContentRenderer v-if="articles" :value="articles">
              <template #empty>
                <p>No content found.</p>
              </template>
            </ContentRenderer>
          </div>
        </article>

        <div class="mt-5 flex items-center justify-center gap-2" aria-label="Share this post">
          <ClientOnly>
            <SocialShare
              v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
              :key="network"
              :network="network"
              :styled="true"
              :label="false"
              class="!h-8 !w-8 !min-w-0 justify-center !rounded-md !p-1.5 [&_.social-share-button__icon]:!h-4 [&_.social-share-button__icon]:!w-4"
            />
          </ClientOnly>
        </div>

        <BlogNavigation :previous-post="previousPost" :next-post="nextPost" />
      </div>
    </div>
  </div>
</template>
