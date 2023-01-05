<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "",
  titleTemplate: "%s",
  meta: [
    { name: "description", content: "Al Asad Nur riyad's Personal Blog Site" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@nuxt_js" },
    { name: "twitter:creator", content: "@nuxt_js" },
  ],
});

const { data } = await useAsyncData("index", () => queryContent("/").find());

useState("blogData", () => (data.value as Array<ParsedContent>) || []);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active {
  transition: all 0.1s ease-out;
}
.page-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-enter-from,
.page-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.layout-enter-active {
  transition: all 0.1s ease-out;
}
.layout-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.layout-enter-from,
.layout-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
