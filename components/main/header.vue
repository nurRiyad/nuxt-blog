<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))
</script>

<template>
  <div class="py-5 border-b font-semibold">
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline ">
      <ul class="flex items-baseline space-x-5">
        <li class="text-lg sm:text-2xl font-bold">
          <NuxtLink to="/" :class="{ underline: path === '' }">
            Riyad's Blog
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
        <li>
          <NuxtLink to="/blogs" :class="{ underline: path === 'blogs' }">
            Blogs
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories" :class="{ underline: path === 'categories' }">
            Categories
          </NuxtLink>
        </li>
        <li title="About Me" :class="{ underline: path === 'about' }">
          <NuxtLink to="/about" aria-label="About me">
            About
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
