<script setup lang="ts">
defineProps({
  title: String,
})

let color = [
  '#dc2626',
  '#d97706',
  '#65a30d',
  '#059669',
  '#0891b2',
  '#0284c7',
  '#4f46e5',
  '#7c3aed',
  '#c026d3',
  '#db2777',
]

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randbgcolor = ref(`${color.at(getRandomInt(0, 8))}`)
</script>

<template>
  <div class="text-white px-5 py-3 rounded hover:underline randbgcolor">
    <NuxtLink to="/" class="text-xl font-extrabold">
      <h1>#{{ title }}</h1>
    </NuxtLink>
  </div>
</template>

<style scoped>
.randbgcolor {
  background-color: v-bind(randbgcolor);
}
</style>
