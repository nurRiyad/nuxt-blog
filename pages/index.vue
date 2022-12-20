<script setup lang="ts">
const { data } = await useAsyncData("index", () => queryContent("/").find());

// get all the unique types from content
const getTopCategory = computed(() => {
  const allpost = data.value || [];
  const alltypes = allpost.map((post) => post.type);
  const uniqType = new Set(alltypes);
  return uniqType;
});

// get all post in recent time order
const getRecentContent = computed(() => {
  const allpost = data.value || [];
  const customizePost = allpost.map((post) => {
    return {
      title: post.title,
      description: post.description,
      path: post._path,
      date: post.date as string,
      type: post.type,
    };
  });

  customizePost.sort(function (a, b) {
    const c = new Date(a.date);
    const d = new Date(b.date);
    return c < d ? 1 : -1;
  });
  return customizePost;
});
</script>

<template>
  <div
    class="container px-4 mx-auto max-w-6xl flex font-ibmmono gap-14 antialiased min-h-[72vh]"
  >
    <div class="flex-1">
      <h1 class="text-xl pb-8 text-[#e60067]">RECENTLY PUBLISHED</h1>
      <div class="space-y-8">
        <template v-for="rp in getRecentContent" :key="rp">
          <blog-card
            :title="rp.title"
            :description="rp.description"
            :path="rp.path"
            :date="rp.date"
            :type="rp.type"
          />
        </template>
      </div>
    </div>
    <div class="basis-1/4">
      <div>
        <h2 class="text-xl pb-8 text-[#e60067]">TOP CATEGORIES</h2>
        <template v-for="cat in getTopCategory" :key="cat">
          <topic-card :title="cat" />
        </template>
      </div>
    </div>
  </div>
</template>
