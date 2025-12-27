<script setup lang="ts">
const { path } = useRoute()
const articles = await queryCollection('content').path(path).first()

const links = articles?.body?.toc?.links || []
</script>

<template>
  <div
    class="fixed top-28 right-[max(2rem,calc((100vw-1024px)/2-300px))] w-56 hidden xl:block max-h-[calc(100vh-8rem)] overflow-y-auto"
  >
    <div
      class="border dark:border-gray-800 p-3 rounded-md dark:bg-slate-900 bg-white/90 backdrop-blur-sm shadow-lg"
    >
      <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2">Table Of Content</h1>
      <NuxtLink
        v-for="link in links"
        :key="link.id"
        :to="`#${link.id}`"
        class="block text-xs mb-3 hover:underline"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>
