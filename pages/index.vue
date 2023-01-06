<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Home',
    },
  ],
  titleTemplate: "Elon's Blog - %s",
})
const { data } = await useAsyncData('home', () => queryContent('/blogs').find())
</script>
<template>
  <main class="container mx-auto">
    <div class="flex m-5 p-3 flex-wrap">
      <template v-for="n in data" :key="n">
        <BlogCard :title="n.title || ''" :excerpt="n.description" image="sdlfkj" :slug="n._path" />
      </template>
    </div>
  </main>
</template>
