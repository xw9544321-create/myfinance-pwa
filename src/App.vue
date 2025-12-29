<template>
  <div class="app-container">
    <div class="page-content">
      <router-view />
    </div>
    
    <!-- 底部导航栏 -->
    <div class="bottom-nav">
      <div class="bg-white rounded-3xl shadow-lg px-4 py-2 flex items-center justify-around">
        <!-- Home -->
        <div 
          class="flex flex-col items-center py-2 px-3 cursor-pointer"
          :class="active === 'home' ? 'text-teal-700' : 'text-gray-400'"
          @click="navigateTo('/', 'home')"
        >
          <van-icon name="wap-home" size="22" />
          <span class="text-xs mt-1">Home</span>
        </div>
        
        <!-- Card -->
        <div 
          class="flex flex-col items-center py-2 px-3 cursor-pointer"
          :class="active === 'card' ? 'text-teal-700' : 'text-gray-400'"
          @click="navigateTo('/card', 'card')"
        >
          <van-icon name="card" size="22" />
          <span class="text-xs mt-1">Card</span>
        </div>
        
        <!-- 中间按钮 -->
        <div 
          class="flex flex-col items-center py-2 px-3 cursor-pointer"
          @click="navigateTo('/bill', 'report')"
        >
          <div class="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center">
            <van-icon name="scan" size="20" color="#fff" />
          </div>
        </div>
        
        <!-- Report -->
        <div 
          class="flex flex-col items-center py-2 px-3 cursor-pointer"
          :class="active === 'report' ? 'text-teal-700' : 'text-gray-400'"
          @click="navigateTo('/bill', 'report')"
        >
          <van-icon name="chart-trending-o" size="22" />
          <span class="text-xs mt-1">Report</span>
        </div>
        
        <!-- Setting -->
        <div 
          class="flex flex-col items-center py-2 px-3 cursor-pointer"
          :class="active === 'setting' ? 'text-teal-700' : 'text-gray-400'"
          @click="active = 'setting'"
        >
          <van-icon name="setting-o" size="22" />
          <span class="text-xs mt-1">Setting</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref('home')

const navigateTo = (path: string, name: string) => {
  active.value = name
  router.push(path)
}
</script>

<style scoped>
.app-container {
  height: 100%;
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.bottom-nav {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  z-index: 50;
}
</style>
