<template>
  <div class="py-5 border-t mt-5 text-zinc-700">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div>
          <p class="text-black text-2xl py-1 font-semibold">
            Al Asad Nur Riyad
          </p>
          <p class="py-2">
            Hi! I am Riyad, a Tech enthusiast, problem solver and software engineer. Currently
            working at Appscode Inc.
          </p>
          <div class="my-3 space-x-3 pb-3">
            <NuxtLink
              to="https://github.com/nurRiyad"
              target="_blank"
              class="p-2 bg-gray-300 rounded-md"
              aria-label="Github"
            >
              <Icon name="fa:github" size="1em" />
            </NuxtLink>
            <NuxtLink
              to="https://www.linkedin.com/in/nur-riyad/"
              target="_blank"
              class="p-2 bg-gray-300 rounded-md"
              aria-label="LinkedIn"
            >
              <Icon name="fa:linkedin-square" size="1em" />
            </NuxtLink>
            <NuxtLink
              to="https://twitter.com/qdnvubp"
              target="_blank"
              class="p-2 bg-gray-300 rounded-md"
              aria-label="Twitter"
            >
              <Icon name="fa:twitter-square" size="1em" />
            </NuxtLink>
            <NuxtLink
              to="https://stackoverflow.com/users/16781395/nur-riyad"
              target="_blank"
              class="p-2 bg-gray-300 rounded-md"
              aria-label="StackOverflow"
            >
              <Icon name="fa:stack-overflow" size="1em" />
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col my-5 md:my-0 md:justify-self-center">
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
