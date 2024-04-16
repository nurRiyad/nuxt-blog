<script setup lang="ts">
import { computed, ref } from 'vue'
import HoppRLogo from '~/components/logo/hoppRLogo.vue'

const route = useRoute()
const path = computed(() => route.fullPath.replace('/', ''))
const colorMode = useColorMode()

function onClick(val: string) {
  colorMode.preference = val
}

const showMenu = ref(false)
const toggleNav = () => (showMenu.value = !showMenu.value)
</script>

<template>
  <div class="bg-indigo-600">
    <nav
      class="
        container
        px-6
        py-8
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/" class="
            text-xl
            font-bold
            text-gray-100
            md:text-2xl
            hover:text-indigo-400
          "
        >
          HoppR Tech
        </router-link>
        <!-- Mobile menu button -->
        <div class="flex md:hidden" @click="toggleNav">
          <button
            type="button" class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'" class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
        <li class="text-gray-100 hover:text-indigo-400 underline-offset-4">
          <NuxtLink to="/" :class="{ underline: path === '' }">
            Accueil
          </NuxtLink>
        </li>
        <li class="text-gray-100 hover:text-indigo-400 underline-offset-4">
          <NuxtLink to="/blogs" :class="{ underline: path === 'blogs' }">
            Tous Nos Articles
          </NuxtLink>
        </li>
        <li class="text-gray-100 hover:text-indigo-400 underline-offset-4">
          <NuxtLink to="/categories" :class="{ underline: path === 'categories' }">
            Catégories
          </NuxtLink>
        </li>
        <li class="text-gray-100 hover:text-indigo-400">
          <NuxtLink to="https://www.hoppr.tech/" aria-label="About" target="_blank" rel="noopener noreferrer">
            À Propos
          </NuxtLink>
        </li>
        <li>
          <ClientOnly>
            <button
              v-if="colorMode.value === 'light'" name="light-mode" title="Light"
              class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onClick('dark')"
            >
              <Icon name="icon-park:moon" size="20" />
            </button>
            <button
              v-if="colorMode.value === 'dark'" name="dark-mode" title="Dark"
              class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onClick('light')"
            >
              <Icon name="noto:sun" size="20" />
            </button>
            <template #fallback>
              <Icon name="svg-spinners:180-ring" size="20" />
            </template>
          </ClientOnly>
        </li>
      </ul>
    </nav>
  </div>
</template>
