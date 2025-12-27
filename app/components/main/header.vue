<script setup lang="ts">
import { navbarData } from '../../data'

const colorMode = useColorMode()
function onClick(val: string) {
  colorMode.preference = val
}

const route = useRoute()
function isActive(path: string) {
  return route.path.startsWith(path)
}
</script>

<template>
  <div class="py-5 border-b dark:border-gray-800 font-semibold">
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline">
      <ul class="flex items-baseline space-x-5">
        <li class="text-base sm:text-2xl font-bold">
          <NuxtLink to="/" :class="{ underline: $route.path === '/' }">
            {{ navbarData.homeTitle }}
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
        <li>
          <NuxtLink to="/blogs" :class="{ underline: isActive('/blogs') }"> Blogs </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories" :class="{ underline: isActive('/categories') }"> Categories </NuxtLink>
        </li>
        <li title="About Me">
          <NuxtLink to="/about" aria-label="About me" :class="{ underline: $route.path === '/about' }"> About </NuxtLink>
        </li>
        <li class="flex items-center">
          <ClientOnly>
            <div class="relative w-5 h-5 flex items-center justify-center">
              <Transition name="icon-fade" mode="out-in">
                <button
                  v-if="colorMode.value === 'light'"
                  key="light-mode"
                  name="light-mode"
                  title="Light"
                  class="absolute inset-0 flex items-center justify-center hover:scale-110 transition-all ease-out hover:cursor-pointer"
                  @click="onClick('dark')"
                >
                  <Icon name="icon-park:moon" size="20" />
                </button>
                <button
                  v-else
                  key="dark-mode"
                  name="dark-mode"
                  title="Dark"
                  class="absolute inset-0 flex items-center justify-center hover:scale-110 transition-all ease-out hover:cursor-pointer"
                  @click="onClick('light')"
                >
                  <Icon name="noto:sun" size="20" />
                </button>
              </Transition>
            </div>
            <template #fallback>
              <!-- this will be rendered on server side -->
              <Icon name="svg-spinners:180-ring" size="20" class="-translate-y-[-20%]" />
            </template>
          </ClientOnly>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

.icon-fade-enter-to,
.icon-fade-leave-from {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
</style>
