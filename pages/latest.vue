<script setup lang="ts">
const { data } = await useAsyncData("home", () => queryContent("/").find());
console.log(data);
</script>

<template>
  <div>
    <p class="text-5xl">Latest Page</p>
    <pre>{{ data }}</pre>
  </div>
</template>
