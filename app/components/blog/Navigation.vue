<script setup lang="ts">
interface NavigationPost {
  path: string
  title: string
}

interface Props {
  previousPost?: NavigationPost | null
  nextPost?: NavigationPost | null
}

defineProps<Props>()
</script>

<template>
  <nav v-if="previousPost || nextPost" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 mb-8" aria-label="Blog post navigation">
    <NuxtLink
      v-if="previousPost"
      :to="previousPost.path"
      class="group flex items-center gap-3 p-5 rounded-lg border dark:border-gray-800 bg-white/90 backdrop-blur-sm dark:bg-slate-900 hover:shadow-lg hover:border-sky-600 dark:hover:border-sky-400 transition-all duration-300"
    >
      <Icon
        name="mdi:arrow-left"
        size="28"
        class="text-sky-600 dark:text-sky-400 group-hover:-translate-x-1 transition-transform duration-300 flex-shrink-0"
      />
      <div class="flex-1 min-w-0">
        <p class="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1">Previous</p>
        <p
          class="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 line-clamp-2 transition-colors duration-300"
        >
          {{ previousPost.title }}
        </p>
      </div>
    </NuxtLink>

    <div v-else class="hidden md:block"></div>

    <NuxtLink
      v-if="nextPost"
      :to="nextPost.path"
      class="group flex items-center gap-3 p-5 rounded-lg border dark:border-gray-800 bg-white/90 backdrop-blur-sm dark:bg-slate-900 hover:shadow-lg hover:border-sky-600 dark:hover:border-sky-400 transition-all duration-300"
      :class="{ 'md:col-start-2': !previousPost }"
    >
      <div class="flex-1 text-right min-w-0">
        <p class="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1">Next</p>
        <p
          class="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 line-clamp-2 transition-colors duration-300"
        >
          {{ nextPost.title }}
        </p>
      </div>
      <Icon
        name="mdi:arrow-right"
        size="28"
        class="text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
      />
    </NuxtLink>
  </nav>
</template>
