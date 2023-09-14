// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Riyad\'s Blog',
      titleTemplate: '%s - Riyad\'s Blog',
      meta: [{ name: 'description', content: 'Riyad\'s awesome blog' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: 'https://blog.nurriyad.xyz',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    'nuxt-og-image',
    '@vueuse/nuxt',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },
})
