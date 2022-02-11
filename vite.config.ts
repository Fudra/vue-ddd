import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': __dirname + '/src',
      '@app': __dirname + '/src/domains/app',
      '@domains': __dirname + '/src/domains',
      '@share': __dirname + '/src/domains/share',
    }
  }
})
