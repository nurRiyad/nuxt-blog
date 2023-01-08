<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Home',
    },
  ],
  titleTemplate: "Elon's Blog - %s",
})
const { data } = await useAsyncData('home', () => queryContent('/blogs').find())

let ar = [
  'javascript',
  'typescript',
  'git',
  'docker',
  'kubernetes',
  'vue',
  'nuxt',
  'pinia',
  'cypress',
]
</script>
<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <template v-for="n in ar" :key="n">
        <CategoryCard :title="n" />
      </template>
    </div>
  </main>
</template>
