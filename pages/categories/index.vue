<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

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
]
</script>
<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <template v-for="topic in topics" :key="n">
        <CategoryCard :title="makeFirstCharUpper(topic)" />
      </template>
    </div>
  </main>
</template>
