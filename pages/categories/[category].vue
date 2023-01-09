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

const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  let name = route.params.category || ''
  let strName = ''

  if (name instanceof Array) strName = name.at(0) || ''
  else strName = name
  return strName
})

const { data } = await useAsyncData('home', () =>
  queryContent('/blogs')
    .where({ tags: { $contains: category.value } })
    .find()
)
</script>
<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryTopic />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="n in data" :key="n">
        <BlogCard :title="n.title || ''" :excerpt="n.description" image="sdlfkj" :slug="n._path" />
      </template>
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </main>
</template>
