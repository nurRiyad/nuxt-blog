<script setup lang="ts">
let x = ref('10')
</script>

<template>
  <nav class="py-5 border-b">
    <div class="container flex justify-between mx-auto items-baseline">
      <ul class="flex items-baseline space-x-5">
        <li>
          <NuxtLink to="/" class="text-2xl font-medium"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories" class="font-medium"> Categories </NuxtLink>
        </li>
      </ul>
      <ul class="flex space-x-3">
        <li>
          <NuxtLink to="/blogs"> Blogs </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs"> Icon </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
