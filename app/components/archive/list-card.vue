<script lang="ts" setup>
interface Props {
  path?: string
  title?: string
  date?: string
  description?: string
  image?: string
  alt?: string
  ogImage?: string
  tags?: Array<string>
  published?: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  tags: () => [],
  published: false,
})
</script>

<template>
  <article
    class="group overflow-hidden rounded-xl border border-zinc-200/80 bg-white/70 text-zinc-700 shadow-sm transition-colors hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900/40 dark:text-zinc-300 dark:hover:border-sky-900"
  >
    <NuxtLink :to="path" class="grid grid-cols-1 sm:grid-cols-[180px_minmax(0,1fr)]">
      <div class="h-40 sm:h-full sm:min-h-36">
        <NuxtImg
          class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
          width="300"
          :src="image"
          :alt="alt"
        />
      </div>
      <div class="flex min-w-0 flex-col justify-center p-4 sm:px-5 sm:py-3">
        <h2
          class="line-clamp-2 text-base font-semibold leading-snug text-black dark:text-zinc-300 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
          {{ title }}
        </h2>
        <p class="mt-1 line-clamp-2 text-sm leading-5 text-zinc-600 dark:text-zinc-400">
          {{ description }}
        </p>
        <div class="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-black dark:text-zinc-300">
          <div class="flex items-center gap-1">
            <LogoDate class="-translate-y-[10%]" />
            <p>{{ date }}</p>
          </div>
          <div class="flex flex-wrap items-center gap-1">
            <LogoTag />
            <p v-for="tag in tags" :key="tag" class="rounded-md bg-gray-200 px-2 py-0.5 font-semibold dark:bg-slate-800">
              {{ tag }}
            </p>
          </div>
        </div>
        <div class="flex items-center pt-2 text-sm text-sky-700 group-hover:underline dark:text-sky-400">
          <span>Read More</span>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
