<script setup lang="ts">
let x = ref(10);
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl">Index page</h1>
    <h4>Count = {{ x }}</h4>
    <input type="button" @click="x += 1" value="increase count" />
  </div>
</template>
