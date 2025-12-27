<script setup lang="ts">
const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY

  const totalScroll = documentHeight - windowHeight
  const progress = (scrollTop / totalScroll) * 100

  scrollProgress.value = Math.min(100, Math.max(0, progress))
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
    <div
      class="h-full bg-sky-600 dark:bg-sky-500 transition-all duration-150 ease-out"
      :style="{ width: `${scrollProgress}%` }"
    />
  </div>
</template>
