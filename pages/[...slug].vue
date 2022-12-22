<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

definePageMeta({
  layout: "blog",
});

const route = useRoute();

const path = computed(() => {
  return route.path || "";
});

const data = useState("blogData");

const content = computed(() => {
  const allpost = (data.value as Array<ParsedContent>) || [];
  return allpost.find((post) => post._path === path.value) || {};
});
</script>

<template>
  <main
    class="container mx-auto bg-white max-w-6xl p-6 min-h-screen prose prose-slate"
  >
    <ContentRenderer :value="content">
      <ContentRendererMarkdown :value="content" />
    </ContentRenderer>
  </main>
</template>
