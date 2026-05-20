import { defineConfig } from 'vite'
import vicinage from '@vicinage/unplugin'
import stylex from '@stylexjs/unplugin'
import tailwindcss from '@tailwindcss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vicinage.vite({
      applyAs: 'attrs',
    }),

    stylex.vite({
      runtimeInjection: process.env['NODE_ENV'] === 'development',
      useCSSLayers: {
        before: ['reset', 'theme'],
        prefix: 'stylex',
      },
    }),

    tailwindcss(),
    vueJsx(),
    //
  ],
})
