import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

function resolve(dir: string) {
  return `${path.resolve(__dirname, dir)}/`;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src/'),
      '~/': resolve('src/')
    }
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
        additionalData: '@import "@/assets/css/global.scss";'
      }
    }
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        // 以/api开头的接口都代理到target指定的域名下
        target: "http://localhost:8888",
        changeOrigin: true,
        // 代替，后端的接口没有/api前缀，而前端有，所以要替换掉
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
