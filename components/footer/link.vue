<template>
  <div class="flex flex-col dark:text-zinc-300   my-5 md:my-0 md:justify-self-center">
    <p class="text-black dark:text-zinc-300  text-base font-semibold">
      Liens Rapides
    </p>
    <NuxtLink to="/" class="hover:underline">
      Accueil
    </NuxtLink>
    <NuxtLink to="/blogs" class="hover:underline">
      Tous Nos Articles
    </NuxtLink>
    <NuxtLink to="/categories" class="hover:underline">
      Catégories
    </NuxtLink>
    <NuxtLink to="https://hoppr.tech" class="hover:underline">
      À Propos
    </NuxtLink>
  </div>
</template>
