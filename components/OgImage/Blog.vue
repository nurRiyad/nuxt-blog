<script setup lang="ts">
import { computed } from 'vue'

// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  path: String,
  title: {
    type: String,
    default: 'Og Image Template',
  },
  description: {
    type: String,
    default: 'Set a description to change me.',
  },
  background: {
    type: String,
    default: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
  },
  color: {
    type: String,
  },
  padding: {
    type: String,
    default: '0 50px',
  },
  titleFontSize: {
    type: String,
    default: '50px',
  },
  descriptionFontSize: {
    type: String,
    default: '35px',
  },
  icon: {
    type: [String, Boolean],
    default: 'logos:nuxt',
  },
  image: {
    type: String,
    required: false,
  },
  siteName: {
    type: String,
    required: false,
  },
  siteLogo: {
    type: String,
    required: false,
  },
  readingMins: {
    type: Number,
    required: false,
  },
})

const titleAttrs = computed(() => {
  const classes: Array<string> = []
  const styles = {
    fontWeight: 'bold',
    marginBottom: '50px',
    lineHeight: '70px',
    fontSize: props.titleFontSize,
  }
  return { class: classes, style: styles }
})

const siteConfig = useSiteConfig()
const siteName = computed(() => {
  return props.siteName || siteConfig.name
})
</script>

<template>
  <div class="bg w-full flex flex-row z-10">
    <div class="w-3/5" style="padding: 50px;">
      <div class="flex flex-col h-full justify-between text-gray-100">
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col">
            <div v-bind="titleAttrs">
              {{ title || 'Null Title' }}
            </div>
            <div class="text-2xl">
              {{ props.description }}
            </div>
          </div>
        </div>
        <div class="text-white w-full flex flex-row">
          <div style="font-size: 30px;" class="font-bold mt-2">
            {{ siteName }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/5 flex items-center justify-center">
      <img v-if="image" :src="image" style="object-fit: cover;" class="rounded-xl max-w-full h-full">
    </div>
  </div>
</template>

<style scoped>
.bg{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,5,5,1) 62%, rgba(4,95,58,1) 100%);
}
</style>
