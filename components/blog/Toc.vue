<script setup lang="ts">
const { path } = useRoute()
const articles = await queryContent(path).findOne()

const links = articles.body.toc.links
</script>

<template>
  <div class="lg:col-span-3 sticky top-28 h-96  p-2 hidden lg:block  justify-self-end">
    <h1 class="text-lg font-bold mb-4">
      Table Of Content
    </h1>
    <NuxtLink v-for="link in links" :key="link.id" :to="`#${link.id}`" class="block text-md mb-3">
      {{ link.text }}
    </NuxtLink>
  </div>
</template>
