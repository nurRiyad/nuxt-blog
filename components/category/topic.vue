<script setup lang="ts">
import { makeFirstCharUpper } from '@/utils/helper'

const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name))
    strName = name.at(0) || ''
  else strName = name
  return makeFirstCharUpper(strName)
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
