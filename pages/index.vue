<script setup lang="ts">
const { data } = await useAsyncData("home", () => queryContent("/").find());

const getTopCategory = computed(() => {
  const allpost = data.value || [];
  const alltypes = allpost.map((post) => post.type);
  const uniqType = new Set(alltypes);
  return uniqType;
});

const getRecentContent = computed(() => {
  const allpost = data.value || [];
  const alltypes = allpost.map((post) => {
    return {
      title: post.title,
      description: post.description,
      path: post._path,
      date: post.date as string,
    };
  });

  alltypes.sort(function (a, b) {
    const c = new Date(a.date);
    const d = new Date(b.date);
    return c < d ? 1 : -1;
  });
  return alltypes;
});

const getPopularContent = computed(() => {
  const allpost = data.value || [];
  const alltypes = allpost.map((post) => {
    return {
      title: post.title,
      path: post._path,
    };
  });
  return alltypes;
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
          />
        </template>
      </div>
    </div>
    <div class="max-w-[400px]">
      <div>
        <h2 class="text-xl pb-8 text-[#e60067]">TOP CATEGORIES</h2>

        <template v-for="cat in getTopCategory" :key="cat">
          <topic-card :title="cat" />
        </template>

        <h2 class="text-xl py-8 text-[#e60067]">POPULAR CONTENT</h2>
        <div class="space-y-5">
          <template v-for="pp in getPopularContent" :key="pp">
            <one-line-card :title="pp.title" :path="pp.path" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
