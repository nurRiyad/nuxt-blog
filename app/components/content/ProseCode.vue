<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <code
    class="font-mono bg-neutral-200 dark:bg-neutral-800 rounded border-2 border-neutral-300 dark:border-neutral-700 p-0.5 no-backticks"
  >
    <slot />
  </code>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
.no-backticks::before,
.no-backticks::after {
  content: '' !important; /* Hide backticks */
}
</style>
