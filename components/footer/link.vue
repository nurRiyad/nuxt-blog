<template>
  <div class="flex flex-col dark:text-zinc-300   my-5 md:my-0 md:justify-self-center">
    <p class="text-black dark:text-zinc-300  text-base font-semibold">
      Быстрые ссылки
    </p>
    <NuxtLink to="/" class="hover:underline">
      Главная
    </NuxtLink>
    <NuxtLink to="/blogs" class="hover:underline">
      Блог
    </NuxtLink>
    <NuxtLink to="/categories" class="hover:underline">
      Категории
    </NuxtLink>
    <NuxtLink to="/about" class="hover:underline">
      Обо мне
    </NuxtLink>
  </div>
</template>
