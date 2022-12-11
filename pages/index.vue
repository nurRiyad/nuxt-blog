<script setup lang="ts">
let x = ref(10);
</script>

<template>
  <div
    class="container px-5 mx-auto max-w-6xl flex font-poppins gap-7 antialiased"
  >
    <div class="flex-1">
      <h1 class="text-xl pb-8 tracking-wide text-[#e60067]">
        RECENTLY PUBLISHED
      </h1>
      <div class="space-y-8">
        <blog-card v-for="n in 7" :key="n" />
      </div>
    </div>
    <div class="max-w-[400px]">
      <div>
        <h2 class="text-xl pb-8 tracking-wide text-[#e60067]">
          TOP CATEGORIES
        </h2>
        <topic-card />
        <h2 class="text-xl py-8 tracking-wide text-[#e60067]">
          POPULAR CONTENT
        </h2>
        <div class="space-y-5">
          <one-line-card v-for="n in 5" :key="n" />
        </div>
      </div>
    </div>
  </div>
</template>
