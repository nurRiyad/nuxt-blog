<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: { ContentLoader },
}
</script>

<template>
  <ContentLoader
    viewBox="0 0 400 160"
    :speed="2"
    primary-color="#c9c9c9"
    secondary-color="#ecebeb"
  >
    <rect x="10" y="13" rx="0" ry="0" width="95" height="86" />
    <rect x="119" y="19" rx="0" ry="0" width="219" height="16" />
    <rect x="119" y="49" rx="0" ry="0" width="277" height="16" />
    <rect x="119" y="82" rx="0" ry="0" width="56" height="14" />
    <rect x="195" y="82" rx="0" ry="0" width="56" height="14" />
    <rect x="272" y="82" rx="0" ry="0" width="56" height="14" />
  </ContentLoader>
</template>
