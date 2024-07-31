<script setup lang="ts">
import type { Person } from '@/types/person'

interface Props {
  authors: Person[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="py-5 border-t dark:border-zinc-500 mt-5 text-zinc-700 dark:text-zinc-300">
    <div class="container max-w-5xl mx-auto text-center">
      <h3 class="text-xl font-semibold mb-4">
        À propos des auteurs
      </h3>
      <div v-for="author in props.authors" :key="author.notionId" class="flex items-center justify-center mb-4">
        <img :src="author.image" :alt="author.name" class="w-16 h-16 rounded-full mr-4 object-cover">
        <div>
          <p class="font-semibold">
            {{ author.name }}
          </p>
        </div>
      </div>
      <div class="flex justify-center space-x-4 mt-3">
        <NuxtLink
          v-for="author in props.authors" :key="author.notionId"
          :to="author.linkedin" target="_blank"
          class="p-2 bg-hoppr-green text-gray-200 rounded-md hover:bg-opacity-80" aria-label="LinkedIn"
        >
          <Icon name="fa:linkedin-square" size="1em" />
        </NuxtLink>
        <NuxtLink
          v-for="author in props.authors" :key="author.notionId"
          :to="author.x" target="_blank"
          class="p-2 bg-hoppr-green text-gray-200 rounded-md hover:bg-opacity-80" aria-label="Twitter"
        >
          <Icon name="fa:twitter-square" size="1em" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
