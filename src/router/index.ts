import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue' // 首页（对应图中页面）
import Card from '@/views/Card.vue' // 卡片页面
import Bill from '@/views/Bill.vue' // 账单页面

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/bill',
    name: 'Bill',
    component: Bill
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router