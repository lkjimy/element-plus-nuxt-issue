  import { fileURLToPath } from 'url'
  import { dirname, join } from 'path'

  const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@element-plus/nuxt'],

  elementPlus: {
    importStyle: 'scss',
    themes: ['dark']
  },

  css: ['#layers/ui/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',

          // NOW FIXED WITH currentDir
          additionalData: `
            @use "${join(currentDir, './assets/scss/element.scss')}" as el;
            @use "${join(currentDir, './assets/scss/_variables.scss')}" as vars;
          `,
        }
      }
    }
  },
})
