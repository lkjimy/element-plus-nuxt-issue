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

          // TRY ANY SCSS FILE FROM ASSETS/SCSS HERE:
          additionalData: `@use "#layers/ui/assets/scss/_element-plus.scss" as element;`,
          // ALWAYS RESULTS IN AN ERROR...
          // ERROR  Pre-transform error: [sass] Module loop: this module is already being loaded.
        }
      }
    }
  },
})
