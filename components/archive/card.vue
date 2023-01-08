<script lang="ts" setup>
defineProps<{
  title: string
  excerpt?: string
  image?: string
  slug?: string
}>()
</script>

<template>
  <article class="group border p-5 m-2 rounded-2xl shadow-lg text-zinc-700">
    <NuxtLink to="/home" class="grid grid-cols-1 sm:grid-cols-9 gap-5">
      <div class="sm:col-span-2">
        <img
          class="lg:h-48 md:h-36 sm:h-36 w-full object-cover object-center rounded-2xl shadow-lg group-hover:scale-[1.05] transition-all duration-500"
          src="/blogs/hello-world/riyad.jpg"
          alt="card photo"
        />
      </div>
      <div class="sm:col-span-7">
        <h2 class="text-3xl font-semibold text-black pb-1 group-hover:text-sky-600">
          This is the card title
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ excerpt }}
        </p>
        <div class="text-black text-sm pt-4 pb-2">
          <div class="flex items-center">
            <LogoDate />
            3rd July 2022
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <span>JavaScript</span>
            <span>Typescript</span>
            <span>Clean</span>
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
