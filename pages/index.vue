<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Bienvenue sur le Blog Tech d\'HoppR. Partage, veille et ressources de la communauté sur les thématiques du Software Craftsmanship, du Cloud, de l\'architecture et de la Tech en générale.',
    },
  ],
  titleTemplate: 'Blog HoppR - %s',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'Blog Hoppr Tech',
  description: 'Partage, veille et ressources de la communauté sur les thématiques du Software Craftsmanship, du Cloud, de l\'architecture et de la Tech en générale.',
  link: '/hoppr.png',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
