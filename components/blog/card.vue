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
  <article class="group border p-5 m-2 rounded-2xl shadow-lg text-zinc-700">
    <NuxtLink :to="link">
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center rounded-2xl shadow-lg group-hover:scale-[1.05] transition-all duration-500"
        :src="`${link}/cover.jpg`"
        :alt="title"
      />
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
      <h2 class="text-3xl font-semibold text-black pb-1 group-hover:text-sky-600">
        {{ title }}
      </h2>
      <p class="text-ellipsis line-clamp-3">
        {{ description }}
      </p>
      <div class="flex group-hover:underline text-sky-600 items-center pt-2">
        <p>Read More</p>
        <LogoArrow />
      </div>
    </NuxtLink>
  </article>
</template>
