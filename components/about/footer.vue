<template>
  <div class="py-5 border-t mt-5 text-zinc-700">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col my-5 md:my-0 md:justify-self-start">
          <p class="text-black text-base font-semibold">
            Quick Link
          </p>
          <NuxtLink to="/" class="hover:underline">
            Home
          </NuxtLink>
          <NuxtLink to="/categories" class="hover:underline">
            Categories
          </NuxtLink>
          <NuxtLink to="/blogs" class="hover:underline">
            Archive
          </NuxtLink>
          <NuxtLink to="https://www.nurriyad.xyz/" target="_blank" class="hover:underline">
            About Me
          </NuxtLink>
        </div>
        <div>
          <p class="text-black text-base font-semibold">
            Connect
          </p>
          <p>
            I have a fair amount of knowledge of Javascript, Typescript, VueJs, and Nuxt. If you
            have an interesting idea, either open source or paid let's connect.
          </p>

          <a
            href="mailto: alasadnurriyad4@gmail.com"
            class="block text-center w-full bg-sky-700 p-2 rounded-lg text-white mt-3 text-sm"
          >
            Sent Mail
          </a>
        </div>
      </div>

      <div class="border-t mt-5 text-center p-2">
        © 2020-2022 No Right is reserved. Who cares 🤷‍♂️? It's
        <a href="https://github.com/nurriyad/blog" target="_blank" rel="nofollow" class="underline">open source</a>
        anyway.
      </div>
    </div>
  </div>
</template>
