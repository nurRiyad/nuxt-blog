<script setup lang="ts">

</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl  mx-auto">
      <div class="col-span-5  max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl  pb-2 font-bold ">
              Al Asad Nur Riyad
            </h1>

            <div class="my-3 space-x-3 pb-10">
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
          <div class="sm:hidden block col-span-3 pb-5">
            <NuxtImg
              src="/riyad.jpg"
              width="125"
              height="115"
              quality="50"
              class="rounded-md"
            />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
          Software Engineer, Problem Solver, Web Enthusiast.
        </h3>

        <p>Hello, fellow human! I'm a software wizard who spends most of his day crafting code spells at @AppsCode in the Bytebuilders team. When I'm not crafting code, you can find me summoning solutions to problems on online judges. Just don't ask me to cast any love spells, my magic only works on machines!</p>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg
          src="/riyad.jpg"
          width="450"
          height="500"
          quality="50"
          class="rounded-md"
        />
      </div>
    </div>
  </div>
</template>
