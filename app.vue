<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "",
  titleTemplate: "%s  riyad",
  meta: [
    { name: "description", content: "Al Asad Nur riyad" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@nuxt_js" },
    { name: "twitter:creator", content: "@nuxt_js" },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Layout Transition */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
