<script lang="ts" setup>
import { navbarData } from '~/data'

const homeTitle = navbarData.homeTitle
const homeDescription = 'Explore articles about JavaScript, TypeScript, Vue, Nuxt, Docker, Kubernetes, and problem solving.'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: homeDescription,
    },
    { property: 'og:title', content: homeTitle },
    { property: 'og:description', content: homeDescription },
    { name: 'twitter:title', content: homeTitle },
    { name: 'twitter:description', content: homeDescription },
  ],
})

// Generate OG Image
defineOgImage('About', {
  headline: 'Greetings 👋',
  title: homeTitle,
  description: homeDescription,
  link: '/riyad.jpg',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
