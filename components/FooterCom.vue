<script setup lang="ts">
const theme = ref("light");
</script>

<template>
  <footer class="p-3 mt-10 bg-[#a2d9ff] font-ibmmono">
    <div class="container px-4 mx-auto max-w-6xl flex justify-between">
      <ul class="flex space-x-2 text-sm text-slate-800 items-end justify-start">
        <li>Copyright &#169; 2022 - Present</li>
        <li>|</li>
        <li>
          All Rights Reserved by
          <nuxt-link
            class="underline"
            target="_blank"
            to="https://nurriyad.xyz"
          >
            Riyad
          </nuxt-link>
        </li>
      </ul>
      <ul class="flex space-x-2 text-sm text-slate-800 items-end justify-start">
        <li>
          <nuxt-link to="/">
            <icon size="22px" name="uil:github" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <icon size="22px" name="uil:linkedin" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <icon size="22px" name="mdi:stackoverflow" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
