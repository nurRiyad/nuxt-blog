<script setup lang="ts">
definePageMeta({
  layout: "list",
});

const { data } = await useAsyncData("home", () => queryContent("/").find());

const getAllPost = computed(() => {
  const allpost = data.value || [];
  const alltypes = allpost.map((post) => {
    return {
      title: post.title,
      path: post._path,
      date: post.date as string,
      type: post.type,
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
    <h1 class="font-semibold text-3xl mt-10 mb-5 py-3 mx-5 text-slate-800">
      ALL BLOG POST
    </h1>
    <div>
      <template v-for="pp in getAllPost" :key="pp">
        <archiev-card
          :title="pp.title"
          :date="pp.date"
          :path="pp.path"
          :type="pp.type"
        />
      </template>
    </div>
  </div>
</template>
