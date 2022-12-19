<template>
  <div class="font-ibmmono group mb-2 group">
    <div class="flex items-center space-x-3 space-y-2">
      <icon name="ant-design:arrow-right-outlined" />
      <div>
        <nuxt-link
          to="/"
          class="group-hover:underline group-hover:text-sky-500"
        >
          This is a archive post link
        </nuxt-link>
        <div class="flex italic text-sm items-center space-x-2">
          <icon name="material-symbols:calendar-month" />
          <p class="text-xs">22 Jan 2022</p>
        </div>
      </div>
    </div>
  </div>
</template>
