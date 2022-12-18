<template>
  <div class="px-5 font-ibmmono mb-5">
    <h4 class="font-semibold text-slate-800 text-xl antialiased p-2">
      Typescript
    </h4>
    <div class="px-10">
      <archive-post-card v-for="n in 5" :key="n" />
    </div>
  </div>
</template>
