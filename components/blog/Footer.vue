<script setup lang="ts">
import type { Author } from '@/types/author'

interface Props {
  author: Author
}

const props = defineProps<Props>()
</script>

<template>
  <div class="py-5 border-t dark:border-zinc-500 mt-5 text-zinc-700 dark:text-zinc-300">
    <div class="container max-w-5xl mx-auto text-center">
      <h3 class="text-xl font-semibold">
        À propos de l'auteur
      </h3>
      <p>{{ props.author.surname }} {{ props.author.name }}</p>
      <div class="flex justify-center space-x-4 mt-3">
        <NuxtLink
          :to="props.author.linkedin" target="_blank"
          class="p-2 bg-hoppr-green text-gray-200 rounded-md hover:bg-opacity-80" aria-label="LinkedIn"
        >
          <Icon name="fa:linkedin-square" size="1em" />
        </NuxtLink>
        <NuxtLink
          :to="props.author.x" target="_blank"
          class="p-2 bg-hoppr-green text-gray-200 rounded-md hover:bg-opacity-80" aria-label="Twitter"
        >
          <Icon name="fa:twitter-square" size="1em" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
