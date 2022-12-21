<script setup lang="ts">
definePageMeta({
  layout: "list",
});
const { data } = useLazyAsyncData("tags", () => queryContent("/").find());

const getTopCategory = computed(() => {
  const allpost = data.value || [];
  const alltypes = allpost.map((post) => post.type);
  const uniqType = new Set(alltypes);
  const cobj = <Array<{ type: string; count: number; path: string }>>[];
  uniqType.forEach((type) => {
    const filterwithType = allpost.filter((post) => post.type === type);

    const path = filterwithType[0]._path?.split("/").at(1);
    cobj.push({
      type: type,
      count: filterwithType.length || 0,
      path: path || "",
    });
  });

  return cobj;
});
</script>

<template>
  <div
    class="container mx-auto max-w-6xl font-ibmmono antialiased min-h-[82vh]"
  >
    <div class="flex justify-start flex-wrap">
      <template v-for="ct in getTopCategory" :key="ct">
        <category-card :type="ct.type" :count="ct.count" :path="ct.path" />
      </template>
    </div>
  </div>
</template>
