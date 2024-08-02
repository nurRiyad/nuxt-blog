<template>
  <div class="flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center">
    <p class="text-black dark:text-zinc-300 text-base font-semibold mb-2">
      Liens Rapides
    </p>
    <ul class="list-disc list-inside">
      <li>
        <NuxtLink to="/" class="hover:underline">
          Accueil
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blogs" class="hover:underline">
          Tous nos Articles
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/categories" class="hover:underline">
          Catégories
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://hoppr.tech" class="hover:underline">
          À Propos
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>