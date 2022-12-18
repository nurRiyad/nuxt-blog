<script setup lang="ts">
const theme = ref("light");
</script>

<template>
  <header class="p-3 mt-10 bg-[#a2d9ff] font-poppins">
    <div class="container px-4 mx-auto max-w-6xl flex justify-center">
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
            Al Asad Nur Riyad
          </nuxt-link>
        </li>
        <li>|</li>
        <li>
          Site source on
          <nuxt-link
            class="underline"
            target="_blank"
            to="https://github.com/nurRiyad/blogs"
          >
            GitHub.
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>
