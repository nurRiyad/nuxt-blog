<template>
  <div>
    <p class="text-black dark:text-zinc-300   text-2xl py-1 font-semibold">
      Никита Ив
    </p>
    <p class="py-2 dark:text-zinc-300  ">
      Привет! Я Никита, энтузиаст технологий, специалист по решению проблем и веб-разработчик. В настоящее время работаю в
      <NuxtLink external target="_blank" to="https://webseed.ru" title="Заказать сайт в Челнах и Казани. Создание и продвижение сайта под ключ.">Webseed.ru</NuxtLink>
    </p>
    <div class="my-3 space-x-3 pb-3">
      <NuxtLink
        to="https://github.com/dllpl"
        target="_blank"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        aria-label="Github"
      >
        <Icon name="fa:github" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://t.me/dllpl"
        target="_blank"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        aria-label="telegram"
      >
        <Icon name="fa:telegram" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/nikita-ivanov-579246198"
        target="_blank"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        aria-label="LinkedIn"
      >
        <Icon name="fa:linkedin-square" size="1em" />
      </NuxtLink>
    </div>
  </div>
</template>
