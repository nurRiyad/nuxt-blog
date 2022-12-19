<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  path: String,
});
</script>

<template>
  <div class="space-y-2 my-5 text-slate-800 group">
    <nuxt-link
      :to="path"
      class="text-xl font-semibold group-hover:text-sky-500"
    >
      {{ title }}
    </nuxt-link>
    <p class="text-slate-600">
      {{ description }}
    </p>
    <nuxt-link :to="path" class="font-semibold group-hover:text-sky-500">
      Read more
      <span class="hidden group-hover:inline"> ->> </span>
    </nuxt-link>
  </div>
</template>
