<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Home',
    },
  ],
  titleTemplate: "Riyad's Blog - %s",
})

// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData('home', () =>
  queryContent('/blogs').limit(6).sort({ _id: -1 }).find()
)
</script>
<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="post in data" :key="post.title">
        <BlogCard
          :title="post.title"
          :description="post.description"
          :link="post._path"
          :time="post.time"
          :tags="post.tags"
        />
      </template>
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </main>
</template>
