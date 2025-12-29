<template>
  <div class="bg-white pb-24">
    <!-- 顶部区域 -->
    <div class="px-4 pt-4">
      <!-- 用户信息栏 -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="avatar" 
            class="w-12 h-12 rounded-full object-cover"
          />
          <div class="ml-3">
            <p class="text-gray-500 text-sm">Good morning,</p>
            <p class="text-gray-900 font-semibold text-lg">Jennie Svarowski</p>
          </div>
        </div>
        <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <van-icon name="bell" size="20" color="#333" />
        </div>
      </div>

      <!-- 银行卡区域 -->
      <div class="relative mt-10">
        <!-- 货币选择器 - 外层深绿色背景 + 内层白色胶囊 -->
        <div class="absolute -top-7 right-0 z-10">
          <div class="bg-teal-800 rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl pl-6 pr-4 pt-2 pb-2 relative">
            <!-- 大正方形 - 2rem，背景与卡片相同 -->
            <div class="absolute -left-8 -top-1 w-8 h-8 bg-teal-800 border-0">
              <!-- 左上角白色小正方形 - 1rem -->
              <div class="absolute left-0 top-0 w-4 h-4 bg-white"></div>
              <!-- 右上角白色小正方形 - 1rem -->
              <div class="absolute right-0 top-0 w-4 h-4 bg-white"></div>
              <!-- 左下角白色小正方形 - 1rem -->
              <div class="absolute left-0 bottom-0 w-4 h-4 bg-white"></div>
              <!-- 白色圆形 - 2rem -->
              <div class="absolute left-0 top-0 w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div class="bg-white rounded-full px-3 py-1.5 flex items-center relative z-10">
              <USFlagIcon class="w-5 h-5 mr-2" />
              <span class="text-sm font-medium text-gray-700">US Dollars</span>
              <van-icon name="arrow-down" size="14" class="ml-2" color="#333" />
            </div>
          </div>
        </div>
        
        <!-- 银行卡主体 -->
        <div class="bg-teal-800 rounded-2xl p-5 pt-10 text-white relative overflow-hidden cursor-pointer" @click="router.push('/card')">
          <!-- 装饰圆形 -->
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div class="absolute -right-5 top-20 w-24 h-24 bg-white/5 rounded-full"></div>
          
          <!-- 余额 -->
          <div class="flex items-center justify-between mb-6 mt-2">
            <p class="text-4xl font-bold">$ 243.320.00</p>
            <div class="w-8 h-8 flex items-center justify-center">
              <EyeOffIcon class="w-6 h-6 text-white/70" />
            </div>
          </div>
          
          <!-- 卡片信息 -->
          <div class="flex items-end justify-between">
            <div class="flex space-x-8">
              <div>
                <p class="text-xs text-white/70 mb-1">Number</p>
                <p class="text-sm font-medium">****9877</p>
              </div>
              <div>
                <p class="text-xs text-white/70 mb-1">Exp.</p>
                <p class="text-sm font-medium">05/25</p>
              </div>
            </div>
            <p class="text-2xl font-bold italic tracking-wider">VISA</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 功能按钮区 -->
    <div class="bg-gray-100 mx-4 my-5 rounded-2xl flex justify-around">
      <div class="flex flex-col items-center py-4" @click="handleAction('send')">
        <div class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-2">
          <van-icon name="guide-o" size="24" color="#333" />
        </div>
        <span class="text-xs text-gray-600">Send</span>
      </div>
      <div class="flex flex-col items-center py-4" @click="router.push('/bill')">
        <div class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-2">
          <van-icon name="notes-o" size="24" color="#333" />
        </div>
        <span class="text-xs text-gray-600">Split Bills</span>
      </div>
      <div class="flex flex-col items-center py-4" @click="handleAction('data')">
        <div class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-2">
          <van-icon name="wifi-o" size="24" color="#333" />
        </div>
        <span class="text-xs text-gray-600">Data Internet</span>
      </div>
      <div class="flex flex-col items-center py-4" @click="handleAction('more')">
        <div class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-2">
          <van-icon name="apps-o" size="24" color="#333" />
        </div>
        <span class="text-xs text-gray-600">More</span>
      </div>
    </div>

    <!-- Quick send 区域 -->
    <div class="bg-gray-100 mx-4 rounded-2xl p-4 mb-4">
      <p class="text-gray-900 font-semibold mb-4">Quick send</p>
      <div class="flex space-x-4 overflow-x-auto">
        <!-- Add 按钮 -->
        <div class="flex flex-col items-center flex-shrink-0">
          <div class="w-14 h-14 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mb-2">
            <van-icon name="plus" size="20" color="#999" />
          </div>
          <span class="text-xs text-gray-600">Add</span>
        </div>
        <!-- 联系人列表 -->
        <div v-for="contact in contacts" :key="contact.name" class="flex flex-col items-center flex-shrink-0">
          <img :src="contact.avatar" :alt="contact.name" class="w-14 h-14 rounded-full object-cover mb-2" />
          <span class="text-xs text-gray-600">{{ contact.name }}</span>
        </div>
      </div>
    </div>

    <!-- Transaction history 区域 -->
    <div class="bg-gray-100 mx-4 rounded-2xl p-4">
      <div class="flex items-center justify-between mb-4">
        <p class="text-gray-900 font-semibold">Transaction history</p>
        <span class="text-teal-600 text-sm cursor-pointer" @click="router.push('/bill')">View all</span>
      </div>
      
      <!-- 交易列表 -->
      <div class="space-y-4">
        <div v-for="transaction in transactions" :key="transaction.id" class="flex items-center justify-between cursor-pointer" @click="router.push('/bill')">
          <div class="flex items-center">
            <div 
              class="w-10 h-10 rounded-xl flex items-center justify-center mr-3"
              :style="{ backgroundColor: transaction.bgColor }"
            >
              <component :is="transaction.icon" class="w-5 h-5" :style="{ color: transaction.iconColor }" />
            </div>
            <div>
              <p class="text-gray-900 font-medium text-sm">{{ transaction.name }}</p>
              <p class="text-gray-400 text-xs">{{ transaction.date }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-gray-900 font-semibold text-sm">{{ transaction.amount }}</p>
            <p class="text-teal-500 text-xs">{{ transaction.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppleIcon from '@/components/icons/AppleIcon.vue'
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue'
import EyeOffIcon from '@/components/icons/EyeOffIcon.vue'
import USFlagIcon from '@/components/icons/USFlagIcon.vue'

const router = useRouter()

// 联系人数据
const contacts = ref([
  { name: 'Miranda', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Alex houten', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Dibala', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Rosdia', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
])

// 交易记录数据
const transactions = ref([
  { 
    id: 1, 
    name: 'Apple music', 
    date: 'Dec 15, 2023', 
    amount: '-$35,43', 
    status: 'Paid',
    bgColor: '#f5f5f5',
    iconColor: '#000',
    icon: AppleIcon
  },
  { 
    id: 2, 
    name: 'Youtube premium', 
    date: 'Dec 15, 2023', 
    amount: '-$18,12', 
    status: 'Paid',
    bgColor: '#fef2f2',
    iconColor: '#ef4444',
    icon: YoutubeIcon
  },
])

const handleAction = (action: string) => {
  console.log('Action:', action)
}
</script>
