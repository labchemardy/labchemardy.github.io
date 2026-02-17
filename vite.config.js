import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/', // 🔥 IMPORTANTE para labchemardy.github.io

  plugins: [vue()],

  server: {
    open: false
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false, // más limpio en producción
  }
})