<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  date: String,
  author: String,
  path: String,
});
</script>

<template>
  <div class="bg-white mx-5 my-2 p-5 max-w-[530px] rounded-md shadow-lg group">
    <nuxt-link :to="path" class="group-hover:text-sky-500">
      <h4 class="text-xl font-medium py-1">{{ title }}</h4>
    </nuxt-link>
    <div class="text-xs text-slate-500 pb-3 flex space-x-4">
      <div class="flex items-center space-x-1">
        <icon name="material-symbols:av-timer" />
        <span class=""> Create {{ date }}</span>
      </div>
      <div class="flex items-center space-x-1">
        <icon name="mdi:face-man" />
        <nuxt-link
          class="hover:underline"
          target="_blank"
          to="https://www.nurriyad.xyz/"
          >by {{ author }}</nuxt-link
        >
      </div>
    </div>

    <p class="pb-2 text-slate-600">
      {{ description }}
    </p>
    <nuxt-link :to="path" class="group-hover:text-sky-500">
      <p class="font-medium">
        Read More
        <span class="hidden group-hover:inline"> ->> </span>
      </p>
    </nuxt-link>
  </div>
</template>
