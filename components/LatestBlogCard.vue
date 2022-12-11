<template>
  <div class="bg-white mx-5 my-2 p-5 max-w-[530px] rounded-md">
    <nuxt-link to="/" class="hover:underline">
      <h4 class="text-xl text-slate-800 font-medium py-1">
        This is latest blog card
      </h4>
    </nuxt-link>
    <div class="text-xs text-slate-500 pb-3 flex space-x-4">
      <div class="flex items-center space-x-1">
        <icon name="material-symbols:av-timer" />
        <span class=""> Create at 10 Dec 2022 </span>
      </div>
      <div class="flex items-center space-x-1">
        <icon name="mdi:face-man" />
        <nuxt-link class="hover:underline" to="/">by riyad</nuxt-link>
      </div>
    </div>

    <p class="pb-2 text-slate-600">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
      reprehenderit sit possimus quibusdam ad facilis, consectetur beatae
      inventore sunt non.
    </p>
    <nuxt-link class="hover:underline" to="/">
      <p class="font-medium">Read More</p>
    </nuxt-link>
  </div>
</template>
