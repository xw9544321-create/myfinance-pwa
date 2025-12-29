import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css' // 引入 Vant 样式（若使用）

const app = createApp(App)
app.use(router)
app.mount('#app')