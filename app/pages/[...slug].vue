<script setup lang="ts">
useHead({
  title: '404',
  meta: [
    {
      name: 'description',
      content: 'Page not found',
    },
    { property: 'og:title', content: 'Page not found' },
    { property: 'og:description', content: 'The requested page could not be found.' },
    { name: 'twitter:title', content: 'Page not found' },
    { name: 'twitter:description', content: 'The requested page could not be found.' },
  ],
})

defineOgImage('About', {
  headline: 'Riyad’s Blog',
  title: 'Page not found',
  description: 'The requested page could not be found.',
})
</script>

<template>
  <div class="py-5">
    <div class="container max-w-xl mx-auto">
      <Logo404 />
    </div>
  </div>
</template>
