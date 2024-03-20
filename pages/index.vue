<script lang="ts" setup>
useHead({
  title: 'Главная',
  meta: [
    {
      name: 'description',
      content:
        'Добро пожаловать',
    },
  ],
  titleTemplate: 'dllpl - %s',
})

// Generate OG Image
// defineOgImageComponent('Мой блог', {
//   headline: 'Привет 👋',
//   title: 'dllpl блог',
//   description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
//   link: '/riyad.jpg',
// })
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
