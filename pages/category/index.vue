<script setup lang="ts">
definePageMeta({
  layout: "list",
});
const { data } = await useAsyncData("home", () => queryContent("/").find());
</script>

<template>
  <div class="container mx-auto max-w-6xl font-poppins antialiased">
    <h1 class="font-semibold text-3xl mt-10 py-3 mx-5 text-slate-800">
      ALL CATEGORY
    </h1>
    <div class="flex justify-between flex-wrap">
      <category-card v-for="n in 20" :key="n" />
    </div>
  </div>
</template>
