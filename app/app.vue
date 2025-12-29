<script setup>
import { siteMetaData } from './data'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: () => siteMetaData,
})
</script>

<template>
  <div class="bg-[#F1F2F4] dark:text-zinc-300 dark:bg-slate-950">
    <NuxtLoadingIndicator :height="4" color="#0284c7" error-color="#ef4444" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.reading-progress .nuxt-loading-indicator {
  /* Reuse Nuxt's built-in loading bar as a reading progress bar on blog pages */
  opacity: 1 !important;
  transform: scaleX(var(--reading-progress, 0%)) !important;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html.dark {
  color-scheme: dark;
}
</style>
