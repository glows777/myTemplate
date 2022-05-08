import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

function resolve(dir: string) {
  return `${path.resolve(__dirname, dir)}/`;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src/'),
      '~/': resolve('src/')
    }
  }
});
