<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))
</script>

<template>
  <div class="py-5 border-t mt-5 text-zinc-700">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <FooterSite v-if="path === 'about'" />
        <FooterDevloper v-else />

        <FooterLink />
        <FooterConnect />
      </div>

      <div class="border-t mt-5 text-center p-2">
        © 2020-2022 No Right is reserved. Who cares 🤷‍♂️? It's
        <a href="https://github.com/nurriyad/blog" target="_blank" rel="nofollow" class="underline">open source</a>
        anyway.
      </div>
    </div>
  </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
