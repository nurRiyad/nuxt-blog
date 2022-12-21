<script setup lang="ts">
const route = useRoute();

const routeType = computed(() => {
  return route.params.topic || "";
});
const { data } = await useLazyAsyncData("listhero", () =>
  queryContent(`/${routeType.value}`).find()
);

const typeName = computed(() => {
  return data.value?.at(0)?.type || "";
});

const title = computed(() => {
  const path = route.fullPath;
  const splitPath = path.split("/");
  const name = splitPath.at(1);
  const tagName = splitPath.at(2);

  if (name === "blogs") return "All Blogs Post";
  else if (name === "tags") {
    if (tagName) {
      return `All ${typeName.value} Related Post`;
    } else {
      return "All Tags";
    }
  } else return "About Me";
});
</script>

<template>
  <div class="text-center text-stone-800 bg-[#a2d9ff] mb-5 font-ibmmono">
    <h1 class="text-4xl p-16 font-bold">{{ title }}</h1>
  </div>
</template>
