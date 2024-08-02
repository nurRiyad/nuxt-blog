// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-31',
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'HoppR Blog',
      titleTemplate: '%s | HoppR Blog',
      meta: [{ name: 'description', content: 'Blog Tech HoppR' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: 'https://blog.hoppr.tech',
    identity: {
      type: 'Company',
    },
    twitter: '@qdnvubp',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    preset: 'vercel',
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

  runtimeConfig: {
    public: {
      baseUrl: 'https://blog.hoppr.tech',
    },
    notion: {
      apiKey: '',
      databasePostsId: '',
    },
    github: {
      owner: '',
      repo: '',
      branch: '',
      appId: '',
      privateKey: '',
    },
  },

  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-content-assets', // make sure to add before @nuxt/content !
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    '@nuxtjs/tailwindcss',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  contentAssets: {
    // contentExtensions: 'mdx? csv',
    debug: false,
  },
})
