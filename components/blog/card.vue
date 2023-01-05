<script lang="ts" setup>
defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
}>();
</script>

<template>
  <div
    class="grid shadow-xl group overflow-hidden rounded max-w-md p-5 m-5 bg-slate-700 text-white"
  >
    <h1 class="text-xl">
      {{ title }}
    </h1>

    <p class="text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore
      cupiditate ducimus, ipsam harum, adipisci laudantium similique voluptate
      officiis sunt nesciunt dolorem repellat cumque obcaecati nulla, sed dolore
      unde. Atque!
    </p>
    <nuxt-link class="underline" :to="slug">
      {{ slug }}
    </nuxt-link>
  </div>
</template>
