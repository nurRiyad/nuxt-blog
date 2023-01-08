<script lang="ts" setup>
defineProps<{
  title: string
  excerpt?: string
  image?: string
  slug?: string
}>()
</script>

<template>
  <article class="group py-4 sm:p-4 w-full">
    <NuxtLink
      :to="slug"
      class="block h-full rounded-3xl overflow-hidden border dark:border-gray-600 transform group-hover:-translate-y-2 duration-300 p-5"
    >
      <img
        src="https://res.cloudinary.com/jahiddev/images/f_auto,q_auto/v1670084907/tips-to-write-better-javascript/tips-to-write-better-javascript.jpg?_i=AA"
        alt="5 Pro Tips for Writing Better JavaScript in 2023"
        class="lg:h-48 md:h-36 w-full object-cover object-center rounded-2xl shadow-lg group-hover:shadow-xl"
      />
      <h2 class="tracking-widest text-xs title-font mb-1 mt-5">
        <p class="uppercase text-xs">
          <span class="inline-flex pr-2">
            <LogoDate />
            3rd Dec 2022</span
          >
          <span class="inline-flex flex-wrap">
            <span>
              <LogoTag />
            </span>
            <span class="mr-2">Clean Code </span>
            <span class="mr-2">JavaScript </span>
          </span>
        </p>
      </h2>
      <h3 class="title-font text-lg mb-3">5 Pro Tips for Writing Better JavaScript in 2023</h3>
      <p class="leading-relaxed mb-3">
        Learn how to write better JavaScript code with these five pro tips. From using code linting
        tools to...
      </p>
      <span
        class="mt-3 text-primary-500 inline-flex items-center md:mb-2 lg:mb-0 group-hover:underline duration-300"
      >
        Read more
        <LogoArrow />
      </span>
    </NuxtLink>
  </article>
</template>
