<script setup lang="ts">
definePageMeta({
  layout: "list",
});

const { data, pending } = await useAsyncData("blogs", () =>
  queryContent("/").find()
);

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
    class="container mx-auto max-w-6xl font-ibmmono antialiased min-h-[72vh]"
  >
    <div v-if="pending">
      <template v-for="n in 5" :key="n">
        <archive-card-loader />
      </template>
    </div>
    <div v-else>
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
