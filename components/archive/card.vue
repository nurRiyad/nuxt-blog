<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  provider: string
  tags: Array<string>
  published: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/nuxt-blog/no-image_cyyits.png',
  alt: 'no-alt',
  ogImage: '/nuxt-blog/no-image_cyyits.png',
  provider: 'cloudinary',
  tags: () => [],
  published: false,
})
</script>

<template>
  <article class="group border m-2 rounded-2xl overflow-hidden shadow-md text-zinc-700">
    <NuxtLink :to="path" class="grid grid-cols-1 sm:grid-cols-9 gap-3">
      <div class="sm:col-span-2">
        <NuxtImg
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.05] transition-all duration-500"
          :provider="provider"
          :src="image"
          :alt="alt"
        />
      </div>
      <div class="sm:col-span-7 p-5">
        <h2 class="text-2xl font-semibold text-black pb-1 group-hover:text-sky-600">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div class="text-black text-sm pt-4 pb-2">
          <div class="flex items-center">
            <LogoDate />
            {{ date }}
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <template v-for="tag in tags" :key="tag">
              <span>{{ tag }}</span>
            </template>
          </div>
        </div>
        <div class="flex group-hover:underline text-sky-600 items-center pt-2">
          <p>Read More</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
