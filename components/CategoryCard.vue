<template>
  <div
    class="basis-1/5 bg-white mx-5 my-2 p-5 rounded-md shadow-lg max-w-[530px] group text-slate-800"
  >
    <nuxt-link to="/category/js" class="group-hover:text-sky-500">
      <div class="flex items-center">
        <h4 class="text-2xl font-medium py-1">Typescript</h4>
      </div>
    </nuxt-link>

    <div class="flex space-x-3 items-start text-slate-600">
      <p class="pb-2">Total Post</p>
      <div class="text-sm">
        <icon calss="bg-red" name="ant-design:arrow-right-outlined" />
      </div>
      <p>433</p>
    </div>

    <nuxt-link class="group-hover:text-sky-500" to="/">
      <p class="font-medium text-sm">
        Read All Post <span class="hidden group-hover:inline"> ->> </span>
      </p>
    </nuxt-link>
  </div>
</template>
