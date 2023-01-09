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
const { data } = await useAsyncData('home', () => queryContent('/blogs').sort({ _id: -1 }).find())
</script>
<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />
    <div>
      <template v-for="post in data" :key="n">
        <ArchiveCard
          :title="post.title"
          :description="post.description"
          :link="post._path"
          :time="post.time"
          :tags="post.tags"
        />
      </template>
    </div>
  </main>
</template>
