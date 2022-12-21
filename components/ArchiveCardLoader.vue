<script setup lang="ts">
import { ContentLoader } from "vue-content-loader";
</script>

<template>
  <div
    class="font-ibmmono px-10 mb-4 text-slate-800 group shadow-sm bg-white rounded-lg py-4"
  >
    <content-loader
      viewBox="0 0 476 45"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="9" y="6" rx="0" ry="0" width="38" height="34" />
      <rect x="58" y="6" rx="0" ry="0" width="369" height="9" />
      <rect x="71" y="29" rx="0" ry="0" width="113" height="9" />
      <rect x="191" y="28" rx="0" ry="0" width="113" height="9" />
    </content-loader>
  </div>
</template>
