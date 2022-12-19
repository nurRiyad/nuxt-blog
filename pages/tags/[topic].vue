<script setup lang="ts">
definePageMeta({
  layout: "list",
});

const route = useRoute();

const routeType = computed(() => {
  return route.params.topic || "";
});
const { data } = await useAsyncData("home", () =>
  queryContent(`/${routeType.value}`).find()
);

const typeName = computed(() => {
  const t = data.value?.at(0)?.type || "";
  return t.toUpperCase();
});

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
      ALL {{ typeName }} POST
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
