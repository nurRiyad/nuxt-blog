<script setup lang="ts">
import { footerData, socialProfiles } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300 text-2xl py-1 font-semibold">
      {{ footerData.author }}
    </p>
    <p class="py-2 dark:text-zinc-300">
      {{ footerData.aboutAuthor }}
    </p>
    <div class="my-3 space-x-3 pb-3">
      <NuxtLink
        v-for="profile in socialProfiles"
        :key="profile.label"
        :to="profile.url"
        target="_blank"
        rel="noopener noreferrer"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        :aria-label="profile.label"
      >
        <Icon :name="profile.icon" size="1em" class="-translate-y-[-10%]" />
      </NuxtLink>
    </div>
  </div>
</template>
