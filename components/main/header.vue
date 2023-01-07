<script setup lang="ts">
let isDark = ref(false)
</script>

<template>
  <div class="py-5 font-spacegrotesk border-b text-zinc-600">
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline">
      <ul class="flex items-baseline space-x-5">
        <li class="">
          <NuxtLink to="/" class="text-2xl text-black font-bold"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories"> Categories </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3">
        <li>
          <NuxtLink to="/blogs"> Archive </NuxtLink>
        </li>
        <Icon
          v-if="isDark"
          size="1.2em"
          @click="isDark = !isDark"
          class="cursor-pointer"
          name="line-md:moon-to-sunny-outline-loop-transition"
        />
        <Icon
          v-else
          size="1.2em"
          @click="isDark = !isDark"
          class="cursor-pointer"
          name="line-md:sunny-outline-to-moon-loop-transition"
        />
      </ul>
    </div>
  </div>
</template>
