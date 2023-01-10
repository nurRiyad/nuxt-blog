// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: "Elon's Blog",
      titleTemplate: "%s - Riyad's Blog",
      meta: [{ name: 'description', content: "Riyad's awesome blog" }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  typescript: {
    strict: true,
  },

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon'],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },
})
