<script setup lang="ts">
import { footerData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300   text-base font-semibold">
      Connect With Me
    </p>
    <p class="dark:text-zinc-300  ">
      {{ footerData.authorInterest }}
    </p>

    <a
      href="mailto: alasadnurriyad4@gmail.com"
      class="block text-center w-full bg-sky-700 p-2 rounded-lg text-[#F1F2F4]  mt-3 text-sm"
    >
      Sent Mail
    </a>
  </div>
</template>
