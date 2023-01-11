<script setup lang="ts">
let isDark = ref(false)
</script>

<template>
  <div class="py-5 border-b text-zinc-700">
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
        <li title="About Me">
          <NuxtLink to="https://www.nurriyad.xyz/">
            <Icon
              v-if="isDark"
              size="1.2em"
              @click="isDark = !isDark"
              class="cursor-pointer"
              name="emojione:boy-dark-skin-tone"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
