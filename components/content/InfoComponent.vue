<template>
  <div class="text-xs font-poppins antialiased text-slate-600 flex space-x-2">
    <div class="flex">
      <p class="mr-1">Created</p>
      <slot name="time" />
    </div>
    <slot name="author" />
  </div>
</template>
