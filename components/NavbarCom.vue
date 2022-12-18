<script setup lang="ts">
const route = useRoute();
const theme = ref("light");

const activeNavbar = computed(() => {
  const path = route.fullPath;
  const splitedPath = path.split("/");
  const navbarName = splitedPath[1];
  return navbarName;
});
</script>

<template>
  <header class="sticky top-0 p-3 bg-[#a2d9ff] font-ibmmono">
    <div class="container px-4 mx-auto max-w-6xl flex justify-between">
      <ul class="flex space-x-8 items-end justify-start">
        <li class="align">
          <nuxt-link
            class="font-semibold text-xl text-slate-800"
            :class="{ underline: activeNavbar === '' }"
            to="/"
          >
            RafKhata
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :class="{ underline: activeNavbar === 'latest' }"
            to="/latest"
            >Latest</nuxt-link
          >
        </li>
        <li>
          <nuxt-link :class="{ underline: activeNavbar === 'tags' }" to="/tags"
            >Tags</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            :class="{ underline: activeNavbar === 'archive' }"
            to="/archive"
            >Archive</nuxt-link
          >
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
