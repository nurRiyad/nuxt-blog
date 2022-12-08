<script setup lang="ts">
const theme = ref("light");
</script>

<template>
  <header class="sticky top-0 p-6 bg-[#a2d9ff]">
    <div class="container mx-auto max-w-6xl flex justify-between items-center">
      <ul class="flex space-x-8">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/latest">Latest</nuxt-link>
        </li>
        <li class="space-x-2">
          <nuxt-link to="/category">Category</nuxt-link>
          <nuxt-link to="#">^</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/archive">Archive</nuxt-link>
        </li>
      </ul>
      <ul class="flex space-x-4">
        <li>
          <nuxt-link to="/">
            <icon size="2em" name="uil:github" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <icon size="2em" name="uil:linkedin" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <icon size="2em" name="mdi:stackoverflow" />
          </nuxt-link>
        </li>
        <li v-if="theme === 'light'" @click="theme = 'dark'">
          <nuxt-link to="/">
            <icon size="2em" name="ph:sun-dim" />
          </nuxt-link>
        </li>
        <li v-if="theme === 'dark'" @click="theme = 'light'">
          <nuxt-link to="/">
            <icon size="2em" name="ph:moon-stars" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>
