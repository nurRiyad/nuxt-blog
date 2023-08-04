<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('/blogs').sort({ _id: -1 }).find())

const elementPerPgae = ref(4)
const pageNumber = ref(1)

const formatedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-descriptoin available',
      image: articles.image || '/nuxt-blog/no-image_cyyits.png',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/nuxt-blog/no-image_cyyits.png',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  }) || []
})

const paginatedData = computed(() => {
  return formatedData.value.filter((data, idx) => {
    const startInd = ((pageNumber.value - 1) * elementPerPgae.value)
    const endInd = (pageNumber.value * elementPerPgae.value) - 1

    if (idx >= startInd && idx <= endInd)
      return true
    else return false
  }) || []
})

function onPreviousPageClick() {
  if (pageNumber.value > 1)
    pageNumber.value -= 1
}

const isNextpageAvailable = computed(() => {
  if (pageNumber.value * elementPerPgae.value <= formatedData.value.length)
    return true
  else return false
})

function onNextPageClick() {
  if (isNextpageAvailable.value)
    pageNumber.value += 1
}

useHead({
  title: 'Archive',
  meta: [
    {
      name: 'description',
      content: 'Here you will find all the blog posts I have written & published on this site.',
    },
  ],
  titleTemplate: 'Riyad\'s Blog - %s',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />
    <ClientOnly>
      <div v-auto-animate class="space-y-5 my-5">
        <template v-for="post in paginatedData" :key="post.title">
          <ArchiveCard
            :path="post.path"
            :title="post.title"
            :date="post.date"
            :description="post.description"
            :image="post.image"
            :alt="post.alt"
            :og-image="post.ogImage"
            :tags="post.tags"
            :published="post.published"
          />
        </template>
      </div>

      <template #fallback>
        <!-- this will be rendered on server side -->
        <BlogLoader />
        <BlogLoader />
      </template>
    </ClientOnly>

    <div class="flex justify-center items-center space-x-6">
      <button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
        <Icon name="mdi:code-less-than" size="30" :class="{ 'text-sky-700': pageNumber > 1 }" />
      </button>
      <p>{{ pageNumber }}</p>
      <button :disabled="!isNextpageAvailable" @click="onNextPageClick">
        <Icon name="mdi:code-greater-than" size="30" :class="{ 'text-sky-700': isNextpageAvailable }" />
      </button>
    </div>
  </main>
</template>
