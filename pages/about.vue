<script setup lang="ts">
// defineOgImageComponent('About', {
//   headline: 'Greetings 👋',
//   title: 'Riyad\'s Blog',
//   description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
//   link: '/riyad.jpg',
// })
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl  mx-auto">
      <div class="col-span-5  max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl  pb-2 font-bold ">
              Никита Иванов
            </h1>

            <div class="my-3 space-x-2 md:space-x-3 pb-10">
              <NuxtLink
                to="https://github.com/dllpl"
                target="_blank"
                class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
                aria-label="Github"
              >
                <Icon name="fa:github" size="1em"/>
              </NuxtLink>
              <NuxtLink
                to="https://t.me/dllpl"
                target="_blank"
                class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
                aria-label="telegram"
              >
                <Icon name="fa:telegram" size="1em"/>
              </NuxtLink>
              <NuxtLink
                to="https://www.linkedin.com/in/nikita-ivanov-579246198"
                target="_blank"
                class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
                aria-label="LinkedIn"
              >
                <Icon name="fa:linkedin-square" size="1em"/>
              </NuxtLink>
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5 dark:text-[#F1F2F4]">
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
          Более 5-ти лет являюсь web-разработчиком и не собираюсь останавливаться.
        </h3>
        <p>
          Работаю fullstack-разработчиком (Laravel+Vue) в аккредитованной IT-компании "Свамисофт", тимлидер
          проектов. Веду свою IT-студию Webseed.ru. Создаю проекты с макета до релиза. Изнутри знаю, как устроены компании в
          финансовом секторе со своими скорингами, эквифаксами, телефонией, пересчетами, сложной бизнес-логикой и
          множеством микросервисов.
        </p>
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
