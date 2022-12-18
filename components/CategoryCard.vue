<template>
  <div class="bg-white mx-5 my-2 p-6 rounded-md shadow-lg">
    <nuxt-link to="/category/js" class="hover:underline">
      <div class="flex items-center">
        <h4 class="text-2xl text-slate-800 font-medium py-1">Typescript</h4>
      </div>
    </nuxt-link>

    <div class="flex space-x-3 items-start text-slate-600">
      <p class="pb-2">Total Post</p>
      <div class="text-sm">
        <icon calss="bg-red" name="ant-design:arrow-right-outlined" />
      </div>
      <p>433</p>
    </div>

    <nuxt-link class="hover:underline" to="/">
      <p class="font-medium">All Js Post</p>
    </nuxt-link>
  </div>
</template>
