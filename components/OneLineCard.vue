<script setup lang="ts">
const props = defineProps({
  title: String,
  path: String,
});
</script>

<template>
  <div class="group font-semibold antialiased text-slate-800 font-ibmmono">
    <nuxt-link class="flex items-baseline space-x-3" :to="path">
      <div class="group-hover:scale-125 transition">
        <icon name="ant-design:arrow-right-outlined" />
      </div>
      <h4 class="group-hover:underline">
        {{ title }}
      </h4>
    </nuxt-link>
  </div>
</template>
