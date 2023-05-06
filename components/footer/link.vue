<template>
  <div class="flex flex-col my-5 md:my-0 md:justify-self-center">
    <p class="text-black text-base font-semibold">
      Quick Link
    </p>
    <NuxtLink to="/" class="hover:underline">
      Home
    </NuxtLink>
    <NuxtLink to="/categories" class="hover:underline">
      Categories
    </NuxtLink>
    <NuxtLink to="/blogs" class="hover:underline">
      Archive
    </NuxtLink>
    <NuxtLink to="https://www.nurriyad.xyz/" target="_blank" class="hover:underline">
      About Me
    </NuxtLink>
  </div>
</template>
