<script setup lang="ts">
defineProps<{
  links: Array<{ id: string; text: string }>
}>()

const isOpen = ref(false)
</script>

<template>
  <div v-if="links && links.length > 0">
    <section class="mb-6 border-b border-zinc-200 pb-5 dark:border-slate-700 2xl:hidden">
      <button
        type="button"
        class="mx-auto flex items-center justify-center gap-1.5 text-sm font-semibold text-zinc-600 transition-colors hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <span>On this page</span>
        <Icon
          name="mdi:chevron-down"
          size="18"
          class="transition-transform duration-500 ease-in-out"
          :class="{ 'rotate-180': isOpen }"
        />
      </button>
      <Transition
        enter-active-class="overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out"
        enter-from-class="max-h-0 -translate-y-2 opacity-0"
        enter-to-class="max-h-[32rem] translate-y-0 opacity-100"
        leave-active-class="overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out"
        leave-from-class="max-h-[32rem] translate-y-0 opacity-100"
        leave-to-class="max-h-0 -translate-y-2 opacity-0"
      >
        <nav v-if="isOpen" class="mx-auto mt-4 grid max-w-2xl gap-2 pb-1 text-center">
          <NuxtLink
            v-for="link in links"
            :key="link.id"
            :to="`#${link.id}`"
            class="text-sm text-zinc-600 hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400"
            @click="isOpen = false"
          >
            {{ link.text }}
          </NuxtLink>
        </nav>
      </Transition>
    </section>

    <aside class="fixed top-28 right-6 hidden max-h-[calc(100vh-8rem)] w-56 overflow-y-auto 2xl:block">
      <div
        class="rounded-md border border-zinc-200 bg-white/95 p-3 shadow-lg backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <h2 class="mb-3 border-b border-zinc-200 pb-2 text-sm font-bold dark:border-slate-800">Table Of Content</h2>
        <nav>
          <NuxtLink v-for="link in links" :key="link.id" :to="`#${link.id}`" class="mb-3 block text-xs hover:underline">
            {{ link.text }}
          </NuxtLink>
        </nav>
      </div>
    </aside>
  </div>
</template>
