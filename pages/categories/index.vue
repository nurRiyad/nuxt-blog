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
const topics = [
  'Javascript',
  'Typescript',
  'Git',
  'Docker',
  'Kubernetes',
  'Vue',
  'Nuxt',
  'Pinia',
  'Vuex',
  'Firebase',
  'Supabse',
  'Cypress',
]
</script>
<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <template v-for="topic in topics" :key="n">
        <CategoryCard :title="topic" />
      </template>
    </div>
  </main>
</template>
