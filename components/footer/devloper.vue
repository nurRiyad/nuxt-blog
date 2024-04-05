<template>
  <div>
    <p class="text-black dark:text-zinc-300   text-2xl py-1 font-semibold">
      Qui sommes-nous ?
    </p>
    <p class="py-2 dark:text-zinc-300  ">
      👉 Une Société de conseil et d'expertise avec un modèle novateur, une communauté Tech qui promeut le partage, la
      veille et fait grandir ses équipes.
    </p>
    <div class="my-3 space-x-3 pb-3">
      <NuxtLink
        to="https://github.com/HoppR-tech" target="_blank"
        class="p-2 bg-hoppr-green text-gray-200 rounded-md hover:bg-opacity-80" aria-label="Github"
      >
        <Icon name="fa:github" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/company/hopprtech" target="_blank"
        class="p-2 bg-hoppr-green text-gray-200 rounded-md hover:bg-opacity-80" aria-label="LinkedIn"
      >
        <Icon name="fa:linkedin-square" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://twitter.com/HoppR_Tech" target="_blank"
        class="p-2 bg-hoppr-green text-gray-200 rounded-md hover:bg-opacity-80" aria-label="X"
      >
        <Icon name="fa:twitter-square" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://hoppr.tech" target="_blank"
        class="p-2 bg-hoppr-green text-gray-200 rounded-md hover:bg-opacity-80" aria-label="Website"
      >
        <Icon name="fa:globe" size="1em" />
      </NuxtLink>
    </div>
  </div>
</template>
