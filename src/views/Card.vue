<template>
  <div class="bg-white pb-24">
    <!-- 顶部标题栏 -->
    <div class="px-4 pt-4 pb-2 flex items-center justify-between">
      <div class="flex items-center">
        <van-icon name="arrow-left" size="20" color="#333" class="mr-3 cursor-pointer" @click="router.push('/')" />
        <h1 class="text-xl font-semibold text-gray-900">My Cards</h1>
      </div>
      <div class="w-8 h-8 flex items-center justify-center">
        <van-icon name="ellipsis" size="20" color="#333" />
      </div>
    </div>

    <!-- 卡片列表 -->
    <div class="px-4 space-y-4">
      <!-- 绿色卡片 -->
      <div class="bg-gradient-to-br from-teal-700 to-teal-600 rounded-2xl p-5 text-white relative overflow-hidden">
        <!-- 装饰圆形 -->
        <div class="absolute right-0 top-0 w-48 h-48 bg-white/5 rounded-full translate-x-16 -translate-y-16"></div>
        <div class="absolute right-10 bottom-0 w-32 h-32 bg-white/5 rounded-full translate-y-10"></div>
        
        <!-- VISA 和芯片 -->
        <div class="flex items-start justify-between mb-4">
          <p class="text-2xl font-bold italic tracking-wider">VISA</p>
          <div class="w-10 h-8 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md flex items-center justify-center">
            <div class="w-6 h-5 border border-yellow-600 rounded-sm"></div>
          </div>
        </div>

        <!-- 卡号 -->
        <div class="mb-4">
          <p class="text-xs text-white/70 mb-1">Card Number</p>
          <div class="flex items-center">
            <p class="text-lg font-semibold tracking-widest">2243 6652 9435 9982</p>
            <van-icon name="closed-eye" size="18" color="rgba(255,255,255,0.7)" class="ml-3" />
          </div>
        </div>

        <!-- 有效期和持卡人 -->
        <div class="flex justify-between items-end">
          <div>
            <p class="text-xs text-white/70 mb-1">Exp</p>
            <p class="text-sm font-medium">05/25</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-white/70 mb-1">Card Name</p>
            <p class="text-sm font-medium">Jennie Svarowsk</p>
          </div>
        </div>
      </div>

      <!-- 深色卡片 -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 text-white relative overflow-hidden">
        <!-- 装饰圆形 -->
        <div class="absolute right-0 top-0 w-48 h-48 bg-teal-900/30 rounded-full translate-x-16 -translate-y-16"></div>
        <div class="absolute right-10 bottom-0 w-32 h-32 bg-teal-900/20 rounded-full translate-y-10"></div>
        
        <!-- VISA 和芯片 -->
        <div class="flex items-start justify-between mb-4">
          <p class="text-2xl font-bold italic tracking-wider">VISA</p>
          <div class="w-10 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-md flex items-center justify-center">
            <div class="w-6 h-5 border border-gray-600 rounded-sm"></div>
          </div>
        </div>

        <!-- 卡号 -->
        <div class="mb-4">
          <p class="text-xs text-white/70 mb-1">Card Number</p>
          <div class="flex items-center">
            <p class="text-lg font-semibold tracking-widest">1234 5678 9012 3456</p>
            <van-icon name="closed-eye" size="18" color="rgba(255,255,255,0.7)" class="ml-3" />
          </div>
        </div>

        <!-- 有效期和持卡人 -->
        <div class="flex justify-between items-end">
          <div>
            <p class="text-xs text-white/70 mb-1">Exp</p>
            <p class="text-sm font-medium">11/26</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-white/70 mb-1">Card Name</p>
            <p class="text-sm font-medium">Alice Wonderland</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 添加卡片按钮 -->
    <div class="px-4 mt-6">
      <button 
        class="w-full py-3 border-2 border-gray-300 border-dashed rounded-full flex items-center justify-center text-gray-600 font-medium"
        @click="handleAddCard"
      >
        Add Cards
        <van-icon name="plus" size="16" class="ml-2" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleAddCard = () => {
  console.log('Add new card')
}
</script>
