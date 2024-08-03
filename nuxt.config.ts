import { navbarData, seoData } from './data'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-03',

  typescript: {
    strict: true,
  },

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: navbarData.homeTitle,
      titleTemplate: `%s - ${navbarData.homeTitle}`,
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  site: {
    url: seoData.mySite,
    name: seoData.name,
    description: seoData.description,
    defaultLocale: 'en',
    twitter: seoData.twitterHandle,
    identity: {
      type: 'Person',
    },
  },
  sitemap: {
    strictNuxtContentPaths: true,
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

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
  ],

})
