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
    class="group m-2 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 text-zinc-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:text-zinc-300"
  >
    <NuxtLink :to="path" class="grid grid-cols-1 gap-1 sm:grid-cols-10">
      <div class="sm:col-span-3">
        <NuxtImg
          class="h-full w-full rounded-t-2xl object-cover object-center shadow-lg transition-all duration-500 group-hover:scale-[1.02] sm:rounded-l-2xl sm:rounded-t-none"
          width="300"
          :src="image"
          :alt="alt"
        />
      </div>
      <div class="p-5 sm:col-span-7">
        <h2
          class="pb-1 text-xl font-semibold text-black dark:text-zinc-300 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div class="mb-1 mt-2 text-sm text-black dark:text-zinc-300 md:flex md:space-x-6">
          <div class="flex items-center">
            <LogoDate class="-translate-y-[10%]" />
            <p>{{ date }}</p>
          </div>
          <div class="flex flex-wrap items-center gap-1">
            <LogoTag />
            <p v-for="tag in tags" :key="tag" class="rounded-md bg-gray-200 px-2 py-1 font-semibold dark:bg-slate-900">
              {{ tag }}
            </p>
          </div>
        </div>
        <div class="flex items-center pt-2 text-sky-700 group-hover:underline dark:text-sky-400">
          <p>Read More</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
