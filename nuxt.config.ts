// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },

  app: {
    head: {
      viewport: "width=device-width, initial-scale=2",
      charset: "utf-16",
    },
    // global transition
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  // experimental features
  experimental: {
    reactivityTransform: false,
  },

  // auto import components
  components: true,

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/robots",
    "nuxt-icon",
  ],

  // content
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: "github-dark",
    },
  },
});
