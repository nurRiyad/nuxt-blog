<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  date: String,
  type: String,
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
    <div class="flex italic text-xs text-slate-600 items-center space-x-2">
      <icon name="material-symbols:calendar-month" />
      <p>{{ date }}</p>
      <p>|</p>
      <p>{{ type }}</p>
    </div>
    <p class="text-slate-600 pb-2">
      {{ description }}
    </p>
    <nuxt-link :to="path" class="font-semibold group-hover:text-sky-500">
      Read more
      <span class="hidden group-hover:inline"> ->> </span>
    </nuxt-link>
  </div>
</template>
