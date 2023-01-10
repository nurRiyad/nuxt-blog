<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Home',
    },
  ],
  titleTemplate: "Riyad's Blog - %s",
})
const { data } = await useAsyncData('home', () => queryContent('/blogs').sort({ _id: -1 }).find())

const formatedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-descriptoin available',
      image: articles.image || '/nuxt-blog/no-image_cyyits.png',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/nuxt-blog/no-image_cyyits.png',
      provider: articles.provider,
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})
</script>
<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />
    <div class="space-y-5 my-5">
      <template v-for="post in formatedData" :key="post.title">
        <ArchiveCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :ogImage="post.ogImage"
          :provider="post.provider"
          :tags="post.tags"
          :published="post.published"
        />
      </template>
    </div>
  </main>
</template>
