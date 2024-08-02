<script setup lang="ts">
import type { Person } from '@/types/blog'

interface Props {
  authors: Person[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="py-5 border-t dark:border-zinc-500 mt-5 text-zinc-700 dark:text-zinc-300">
    <div class="container max-w-5xl mx-auto">
      <h3 class="text-xl font-semibold mb-4 text-center">
        À propos des auteurs
      </h3>
      <div class="flex flex-wrap justify-center items-center gap-6">
        <template v-for="(author, index) in props.authors" :key="author.notionId">
          <div class="flex items-center">
            <img :src="author.image" :alt="author.name" class="w-16 h-16 rounded-full mr-4 object-cover">
            <div>
              <p class="font-semibold text-base">
                {{ author.name }}
              </p>
              <div class="flex space-x-2 mt-2">
                <a
                  v-if="author.linkedin" :href="author.linkedin" target="_blank" rel="noopener noreferrer"
                  class="text-hoppr-green hover:text-opacity-80" aria-label="LinkedIn"
                >
                  <Icon name="fa:linkedin-square" size="1.5em" />
                </a>
                <a
                  v-if="author.x" :href="author.x" target="_blank" rel="noopener noreferrer"
                  class="text-hoppr-green hover:text-opacity-80" aria-label="Twitter"
                >
                  <Icon name="fa:twitter-square" size="1.5em" />
                </a>
              </div>
            </div>
          </div>
          <div v-if="index < props.authors.length - 1" class="h-16 w-px bg-gray-300 dark:bg-zinc-600" />
        </template>
      </div>
    </div>
  </div>
</template>
