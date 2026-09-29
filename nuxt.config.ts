import { seoData } from './app/data'
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-30',

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    'nuxt-llms',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@formkit/auto-animate',
    '@stefanobartoletti/nuxt-social-share',
  ],

  fonts: {
    families: [{ name: 'Space Grotesk', provider: 'google', weights: [400, 600], global: true }],
  },

  llms: {
    domain: seoData.mySite,
    title: seoData.title,
    description: seoData.description,
  },

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: seoData.title,
      titleTemplate: `%s - ${seoData.title}`,
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  site: {
    url: seoData.mySite,
    name: 'Al Asad Nur Riyad',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/rss.xml'],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'dracula',
          },
        },
      },
    },
    experimental: {
      nativeSqlite: true,
    },
  },
})
