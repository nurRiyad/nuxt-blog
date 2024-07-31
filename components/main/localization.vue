<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, setLocale, locales } = useI18n();
const selectedLanguage = ref(locale.value);

function toggleLanguage() {
  setLocale(selectedLanguage.value).then(() => {
    window.location.reload();
  });
}

</script>

<template>
<ClientOnly>
  <li class="flex items-center">
    <select
      v-model="selectedLanguage"
      @change="toggleLanguage"
      class="relative inline-flex items-center rounded-full border dark:bg-slate-600 border-gray-300 bg-gray-200 w-32 h-10 cursor-pointer"
    >
      <option
        v-for="lang in locales"
        :key="lang.code"
        :value="lang.code"
        :class="{
          'bg-sky-700 text-white': selectedLanguage === lang.code,
          'bg-gray-200 dark:bg-slate-600 text-black dark:text-white': selectedLanguage !== lang.code,
        }"
      >
        {{ lang.name }}
      </option>
    </select>
  </li>
</ClientOnly>
</template>

<style>
/* Add any additional styles you need here */
option {
  background-color: inherit;
  color: inherit;
}
</style>
