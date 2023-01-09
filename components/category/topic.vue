<script setup lang="ts">
const route = useRoute()

// The the category name and make the first char upper
const category = computed(() => {
  const name = route.params.category || ''
  const firstChar = name.at(0)?.toLocaleUpperCase() || ''
  const otherChar = name.slice(1)

  return firstChar + otherChar
})
</script>

<template>
  <div class="container mx-auto">
    <div class="p-6 my-4 mx-3 rounded-md bg-gray-200">
      <h1 class="text-black font-semibold leading-tight text-4xl md:text-5xl my-5">
        #{{ category }}
      </h1>
    </div>
  </div>
</template>
