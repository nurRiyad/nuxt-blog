<script setup lang="ts">
const props = defineProps({
  title: String,
});

const router = useRouter();

const onClick = () => {
  router.push(`/tags/${props.title?.toLocaleLowerCase()}`);
};
</script>

<template>
  <button
    @click="onClick"
    class="bg-[#a2d9ff] px-2 py-1 m-2 transition hover:scale-105 rounded-md"
  >
    {{ title }}
  </button>
</template>
