import path from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: [
      '.ts', '.tsx', '.vue'
    ],
  },
  css:{
    modules:{
      scopeBehaviour: 'local'
    }
  },
  optimizeDeps: {
    include: ["echarts"]
  },
  plugins: [
    vue(), // 提供 vue 单文件组件支持
    vueJsx(), // 提供 jsx 支持
  ],
})
