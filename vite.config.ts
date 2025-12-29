import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
// 按需引入 Vant（可选，优化打包体积）
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myfinance-pwa/',
  plugins: [
    vue(),
    // 按需引入 Vant 组件
    Components({
      resolvers: [VantResolver()],
    }),
    // PWA 核心配置（关键）
    VitePWA({
      // 1. 配置 Web App Manifest（桌面图标、应用名称等，PWA 必备）
      manifest: {
        name: '金融账单管理',
        short_name: '金融账单',
        description: '金融类前端页面，支持离线访问',
        display: 'standalone',
        start_url: './',
        scope: './',
        background_color: '#ffffff',
        theme_color: '#006644',
        icons: [
          {
            src: 'icons/icon1.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon2.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      // 2. 配置 Service Worker（离线缓存策略）
      workbox: {
        globPatterns: ['**/*.{html,css,js,ico,png,svg}'], // 缓存所有静态资源
        runtimeCaching: [
          // 运行时缓存策略（可选，针对动态资源）
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst', // 优先网络请求，网络失败则使用缓存
            options: {
              cacheName: 'http-cache',
              cacheableResponse: { statuses: [200] }
            }
          }
        ]
      },
      // 3. 其他 PWA 配置
      registerType: 'autoUpdate', // 自动更新 Service Worker
      injectRegister: 'auto', // 自动注入注册脚本
      devOptions: {
        enabled: true // 开发环境启用 PWA（方便调试，生产环境自动生效）
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 配置路径别名，方便导入组件
    }
  }
})