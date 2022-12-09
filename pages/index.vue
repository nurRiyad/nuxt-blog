<script setup lang="ts">
let x = ref(10);
</script>

<template>
  <div
    class="container px-5 mx-auto max-w-6xl flex font-poppins space-x-5 antialiased"
  >
    <div class="flex-1">
      <h1 class="text-xl pb-8 tracking-wide text-[#e60067]">
        RECENTLY PUBLISHED
      </h1>
      <div class="space-y-8">
        <blog-card v-for="n in 10" :key="n" />
      </div>
    </div>
    <div class="max-w-[300px]">
      <div>
        <h2 class="text-xl pb-8 tracking-wide text-[#e60067]">
          TOP CATEGORIES
        </h2>
      </div>
    </div>
  </div>
</template>
