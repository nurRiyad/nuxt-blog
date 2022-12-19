<script setup lang="ts">
const props = defineProps({
  title: String,
  path: String,
  date: String,
  type: String,
});
</script>

<template>
  <div class="font-ibmmono px-10 mb-4 text-slate-800 group">
    <div class="flex items-center space-x-3 space-y-2">
      <icon name="ant-design:arrow-right-outlined" />
      <div>
        <nuxt-link
          :to="path"
          class="group-hover:underline group-hover:text-sky-500 text-lg"
        >
          {{ title }}
        </nuxt-link>
        <div class="flex italic text-sm text-slate-600 items-center space-x-2">
          <icon name="material-symbols:calendar-month" />
          <p>{{ date }}</p>
          <p>|</p>
          <p>{{ type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
