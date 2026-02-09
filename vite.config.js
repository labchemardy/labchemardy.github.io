import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  server: {
    open: '/usr/bin/firefox'  // No abrir el navegador automáticamente
  },
  resolve: {
    alias: {
      '@': './src'
    }
  }
});
