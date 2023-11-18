<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

const topics = [
  'javascript',
  'typescript',
  'git',
  'docker',
  'kubernetes',
  'vue',
  'nuxt',
  'pinia',
  'vuex',
  'firebase',
  'supabse',
  'cypress',
  'vercel',
  'namecheap',
]

useHead({
  title: 'Categories',
  meta: [
    {
      name: 'description',
      content:
        'Below All the topics are listed on which either I have written a blog or will write a blog in near future.',
    },
  ],
  titleTemplate: 'Riyad\'s Blog - %s',
})

defineOgImage()
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <CategoryCard v-for="topic in topics" :key="topic" :title="makeFirstCharUpper(topic)" />
    </div>
  </main>
</template>
