<script setup lang="ts">
import type { BlogPost, ContentItem } from '@/types/blog'
import { navbarData, seoData } from '~/data'

const { path } = useRoute()

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => queryCollection('content').path(path).first())

if (error.value) navigateTo('/404')

// Reading progress (reuses Nuxt's built-in loading indicator via CSS var)
const updateReadingProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY

  const totalScroll = documentHeight - windowHeight
  const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0
  const clamped = Math.min(100, Math.max(0, progress))

  document.documentElement.style.setProperty('--reading-progress', `${clamped}%`)
}

onMounted(() => {
  document.documentElement.classList.add('reading-progress')
  window.addEventListener('scroll', updateReadingProgress, { passive: true })
  updateReadingProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateReadingProgress)
  document.documentElement.classList.remove('reading-progress')
  document.documentElement.style.removeProperty('--reading-progress')
})

// Get previous and next post navigation
const { previousPost, nextPost } = await useBlogNavigation(path)

const data = computed<BlogPost>(() => {
  const article = articles.value as ContentItem | null
  const meta = article?.meta || {}

  return {
    title: article?.title || 'no-title available',
    description: article?.description || 'no-description available',
    image: meta.image || '/not-found.jpg',
    alt: meta.alt || 'no alter data available',
    ogImage: article?.ogImage || meta.ogImage || '/not-found.jpg',
    date: meta.date || 'not-date-available',
    tags: meta.tags || [],
    published: meta.published || false,
  }
})

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
    {
      name: 'description',
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: navbarData.homeTitle },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `${seoData.mySite}/${path}`,
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
    { name: 'twitter:site', content: '@qdnvubp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `${seoData.mySite}/${path}`,
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
      href: `${seoData.mySite}/${path}`,
    },
  ],
})

// Generate OG Image
const article = articles.value as ContentItem | null
defineOgImageComponent('Test', {
  headline: 'Riyads Blog 👋',
  title: article?.seo?.title || '',
  description: article?.seo?.description || '',
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
