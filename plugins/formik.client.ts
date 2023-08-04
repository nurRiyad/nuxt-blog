import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(autoAnimatePlugin)
})
