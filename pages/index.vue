<script lang="ts" setup>
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home",
    },
  ],
  titleTemplate: "Elon's Blog - %s",
});
</script>
<template>
  <main>
    <div class="flex m-5 p-3 flex-wrap">
      <template v-for="n in 10" :key="n">
        <BlogCard
          title="sldkfsl"
          excerpt="sldkfj"
          image="sdlfkj"
          slug="sdlkfj"
        />
      </template>
    </div>
  </main>
</template>
