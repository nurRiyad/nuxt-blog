<script setup lang="ts">
import type { BlogPost } from '@/types/blog'
const { path } = useRoute()
const articles = await queryContent(path).findOne()

const data = computed<BlogPost>(() => {
  return {
    title: articles.title || 'no-title available',
    description: articles.description || 'no-descriptoin available',
    image: articles.image || '/nuxt-blog/no-image_cyyits.png',
    alt: articles.alt || 'no alter data available',
    ogImage: articles.ogImage || '/nuxt-blog/no-image_cyyits.png',
    provider: articles.provider || 'cloudinary',
    date: articles.date || 'not-date-available',
    tags: articles.tags || [],
    published: articles.published || false,
  }
})

const comImg = computed(() => {
  return 'https://res.cloudinary.com/dmecmyphj/image/fetch/v1673371143/https://res.cloudinary.com/dmecmyphj/image/upload/v1673371119/53835458_1012834392239582_6610542001026760704_n_1_psvrpo.jpg'
})

useHead({
  title: data.value.title || '',
  meta: [
    { name: 'description', content: data.value.description },
    {
      name: 'description',
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: `Riyad's Blog` },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://blog-nurriyad.vercel.app/',
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
      content: comImg.value,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@@qdnvubp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: 'https://blog-nurriyad.vercel.app/',
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
      content: comImg.value,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://blog-nurriyad.vercel.app/${path}`,
    },
  ],
})
</script>

<template>
  <main class="px-6 container max-w-5xl mx-auto">
    <header>
      <h1 class="text-xl md:text-3xl lg:text-5xl m-7 font-bold text-center">
        {{ data.title || '' }}
      </h1>
      <NuxtImg
        :provider="data.provider"
        :src="data.image || ''"
        :alt="data.alt || ''"
        class="m-auto rounded-2xl shadow-lg h-52 md:h-96 w-4/5 content-center object-cover"
      />
      <p class="text-xs sm:text-sm my-3 max-w-3xl mx-auto text-center text-zinc-600">
        {{ data.description }}
      </p>
      <div class="flex w-full justify-center text-xs md:text-base my-8">
        <div class="md:flex text-black content-center gap-8 text-xs sm:text-sm">
          <div class="flex items-center font-semibold">
            <LogoDate />
            <p>{{ data.date || '' }}</p>
          </div>
          <div class="flex items-center gap-2 flex-wrap my-5">
            <LogoTag />
            <template v-for="tag in data.tags">
              <span class="bg-gray-200 rounded-md px-2 py-1 font-semibold">{{ tag }}</span>
            </template>
          </div>
        </div>
      </div>
    </header>
    <div
      class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc prose-img:rounded-lg"
    >
      <ContentDoc>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>
