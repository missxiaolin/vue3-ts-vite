import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

// 获取主题文件名
const themeFiles: any = fs.readdirSync('./src/assets/css/theme')
const ThemesArr: any = []
themeFiles.forEach(function (item, index) {
  const stat: any = fs.lstatSync('./src/assets/css/theme/' + item)
  if (stat.isDirectory() === true) {
    ThemesArr.push(item)
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // 定义常量可以在项目中使用
    THEMEARR: JSON.stringify(ThemesArr),
    THEMEFILES: JSON.stringify(themeFiles),
  },
  base: './', //打包路径
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/mian.scss";@import "@/assets/css/theme/index.scss";',
      },
    },
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8011,
    open: true,
    https: false,
    proxy: {},
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
