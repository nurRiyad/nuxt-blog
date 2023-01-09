<script lang="ts" setup>
interface Props {
  title: string
  description: string
  time: string
  link: string
  tags: Array<string>
}

withDefaults(defineProps<Props>(), {
  title: 'No title availabe',
  description: 'No description available',
  time: 'No time available',
  link: '/',
  tags: () => ['no-tag'],
})
</script>

<template>
  <article class="group border m-2 rounded-2xl overflow-hidden shadow-md text-zinc-700">
    <NuxtLink :to="link" class="grid grid-cols-1 sm:grid-cols-9 gap-3">
      <div class="sm:col-span-2">
        <img
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.05] transition-all duration-500"
          :src="`${link}/cover.jpg`"
          :alt="title"
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
            {{ time }}
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
