import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  envPrefix: ['NUXT_'],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, '/'),
    },
  },
})
