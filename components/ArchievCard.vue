<template>
  <div class="px-10 font-ibmmono mb-6 text-slate-700">
    <h4 class="font-semibold text-xl antialiased">Typescript</h4>
    <div class="px-10">
      <archive-post-card v-for="n in 5" :key="n" />
    </div>
  </div>
</template>
