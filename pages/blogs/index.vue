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
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />
    <div>
      <template v-for="n in data" :key="n">
        <ArchiveCard
          :title="n.title || ''"
          :excerpt="n.description"
          image="sdlfkj"
          :slug="n._path"
        />
      </template>
    </div>
  </main>
</template>
