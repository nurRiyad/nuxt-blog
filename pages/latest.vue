<script setup lang="ts">
definePageMeta({
  layout: "list",
});

const { data } = await useAsyncData("home", () => queryContent("/").find());

const getRecentContent = computed(() => {
  const allpost = data.value || [];
  const alltypes = allpost.map((post) => {
    return {
      title: post.title,
      description: post.description,
      path: post._path,
      date: post.date as string,
      author: post.author,
    };
  });

  alltypes.sort(function (a, b) {
    const c = new Date(a.date);
    const d = new Date(b.date);
    return c < d ? 1 : -1;
  });
  return alltypes;
});
</script>

<template>
  <div
    class="container mx-auto max-w-6xl font-ibmmono antialiased min-h-[82vh]"
  >
    <h1 class="font-semibold text-3xl mt-10 py-3 mx-5 text-slate-800">
      LATEST CONTENT
    </h1>
    <div class="flex justify-between flex-wrap">
      <template v-for="pp in getRecentContent" :key="pp">
        <latest-blog-card
          :title="pp.title"
          :description="pp.description"
          :date="pp.date"
          :author="pp.author"
          :path="pp.path"
        />
      </template>
    </div>
  </div>
</template>
