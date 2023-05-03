<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))
</script>

<template>
  <div class="py-5 border-b text-zinc-700">
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline ">
      <ul class="flex items-baseline space-x-5">
        <li class="">
          <NuxtLink to="/" class="text-2xl text-black font-bold " :class="{ underline: path === '' }">
            Home
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 font-bold ">
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
        <li title="About Me" :class="{ underline: path === 'myself' }">
          <NuxtLink to="/myself" aria-label="About me">
            About Me
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
