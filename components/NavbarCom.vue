<script setup lang="ts">
const theme = ref("light");
</script>

<template>
  <header class="sticky top-0 p-6 bg-[#a2d9ff] font-poppins">
    <div class="container px-3 mx-auto max-w-6xl flex justify-between">
      <ul class="flex space-x-8 items-end">
        <li class="align">
          <nuxt-link to="/">
            <icon class="text-blue-700" size="35" name="mdi:robot-excited" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/latest">Latest</nuxt-link>
        </li>
        <li class="space-x-2">
          <nuxt-link to="/category">Category</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/archive">Archive</nuxt-link>
        </li>
      </ul>
      <ul class="flex space-x-3 items-end">
        <li>
          <nuxt-link to="/">
            <icon size="25px" name="uil:github" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <icon size="25px" name="uil:linkedin" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <icon size="25px" name="mdi:stackoverflow" />
          </nuxt-link>
        </li>
        <li v-show="theme === 'light'" @click="theme = 'dark'">
          <nuxt-link to="/">
            <icon size="25px" name="ph:sun-dim" />
          </nuxt-link>
        </li>
        <li v-show="theme === 'dark'" @click="theme = 'light'">
          <nuxt-link to="/">
            <icon size="25px" name="ph:moon-stars" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>
