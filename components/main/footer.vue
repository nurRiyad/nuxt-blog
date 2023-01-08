<template>
  <div class="py-5 border-t mt-5 text-zinc-700">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div>
          <p class="text-black text-2xl py-1 font-semibold">Al Asad Nur Riyad</p>
          <p class="py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia soluta voluptatum
            eligendi laboriosam non reprehenderit.
          </p>
          <div class="my-3 space-x-3 pb-3">
            <NuxtLink class="p-2 bg-gray-300 rounded-md">
              <Icon name="fa:github" size="1em" />
            </NuxtLink>
            <NuxtLink class="p-2 bg-gray-300 rounded-md">
              <Icon name="fa:linkedin-square" size="1em" />
            </NuxtLink>
            <NuxtLink class="p-2 bg-gray-300 rounded-md">
              <Icon name="fa:twitter-square" size="1em" />
            </NuxtLink>
            <NuxtLink class="p-2 bg-gray-300 rounded-md">
              <Icon name="fa:stack-overflow" size="1em" />
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col my-5 md:my-0 md:justify-self-center">
          <p class="text-black text-base font-semibold">Quick Link</p>
          <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          <NuxtLink to="/" class="hover:underline">Categories</NuxtLink>
          <NuxtLink to="/" class="hover:underline">Archive</NuxtLink>
          <NuxtLink to="/" class="hover:underline">About Me</NuxtLink>
        </div>
        <div>
          <p class="text-black text-base font-semibold">Connect</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque inventore
            quia nesciunt?
          </p>
          <input
            id="email"
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            class="mt-3 form-control w-full border-2 rounded-lg p-2 text-sm bg-gray-100"
          />
          <button class="btn w-full bg-sky-600 p-2 rounded-lg text-white mt-3 text-sm">
            Subscribe
          </button>
        </div>
      </div>

      <div class="border-t mt-5 text-center p-2">
        © 2020-2022 No Right is reserved. Who cares 🤷‍♂️? It's
        <a href="https://github.com/nurriyad/blog" target="_blank" rel="nofollow" class="underline"
          >open source</a
        >
        anyway.
      </div>
    </div>
  </div>
</template>
