<script lang="ts" setup>
defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
}>();
</script>

<template>
  <div
    class="grid shadow-xl group overflow-hidden rounded max-w-md p-5 m-5 bg-slate-700 text-white"
  >
    <h1 class="text-xl">
      Riyad ipsum dolor sit amet, consectetur adipisicing elit. Saepe, commodi?
    </h1>
    <p class="text-sm">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat autem
      sit ratione vitae dolores porro in fuga quae corporis quis?
    </p>
  </div>
</template>
