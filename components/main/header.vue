<script setup lang="ts">

</script>

<template>
  <div class="py-5 border-b text-zinc-700">
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline">
      <ul class="flex items-baseline space-x-5">
        <li class="">
          <NuxtLink to="/" class="text-2xl text-black font-bold">
            Home
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 font-bold">
        <li>
          <NuxtLink to="/categories">
            Categories
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs">
            Archive
          </NuxtLink>
        </li>
        <li title="About Me">
          <NuxtLink to="/myself" aria-label="About me">
            Myself
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
