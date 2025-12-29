<template>
  <div class="bg-white pb-24">
    <!-- 顶部标题栏 -->
    <div class="px-4 pt-4 pb-4 flex items-center justify-between">
      <van-icon name="arrow-left" size="20" color="#333" @click="goBack" />
      <h1 class="text-lg font-semibold text-gray-900">Bill Details</h1>
      <van-icon name="ellipsis" size="20" color="#333" />
    </div>

    <!-- 账单明细卡片 -->
    <div class="mx-4 bg-gray-100 rounded-2xl overflow-hidden">
      <!-- 表头 -->
      <div class="px-4 py-3 flex items-center border-b border-gray-100">
        <span class="flex-1 text-gray-600 text-sm">Item's</span>
        <span class="w-16 text-center text-gray-600 text-sm">Price</span>
        <span class="w-10 text-center text-gray-600 text-sm">Qty</span>
      </div>

      <!-- 账单项目列表 -->
      <div class="divide-y divide-gray-50">
        <div v-for="item in billItems" :key="item.id" class="px-4 py-3">
          <div class="flex items-center">
            <span class="flex-1 text-gray-900 font-medium text-sm">{{ item.name }}</span>
            <span class="w-16 text-center text-gray-900 text-sm">${{ item.price.toFixed(2) }}</span>
            <span class="w-10 text-center text-gray-900 text-sm">{{ item.qty }}</span>
          </div>
          <!-- 添加按钮 -->
          <div class="mt-2">
            <div class="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
              <van-icon name="plus" size="12" color="#999" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 费用汇总 -->
    <div class="mx-4 mt-4 bg-gray-100 rounded-2xl px-4 py-4">
      <div class="flex items-center justify-between mb-2">
        <span class="text-gray-600 text-sm">Sales Tax (10%)</span>
        <span class="text-gray-900 text-sm">${{ salesTax.toFixed(2) }}</span>
      </div>
      <div class="flex items-center justify-between mb-3">
        <span class="text-gray-600 text-sm">Discount</span>
        <span class="text-gray-900 text-sm">-${{ discount.toFixed(2) }}</span>
      </div>
      <div class="flex items-center justify-between pt-2 border-t border-gray-100">
        <span class="text-gray-900 font-semibold">Amount</span>
        <span class="text-gray-900 font-bold text-xl">${{ totalAmount.toFixed(2) }}</span>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="mx-4 mt-6 space-y-3">
      <button 
        class="w-full py-3.5 bg-teal-700 text-white font-semibold rounded-full"
        @click="handleConfirm"
      >
        Confirm
      </button>
      <button 
        class="w-full py-3.5 bg-white border border-gray-300 text-gray-900 font-semibold rounded-full"
        @click="handleEditBill"
      >
        Edit Bill
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 账单项目数据
const billItems = ref([
  { id: 1, name: 'Beef Teriyaki Bowl', price: 4.50, qty: 1 },
  { id: 2, name: 'Salmon Sashimi Plate', price: 4.80, qty: 1 },
  { id: 3, name: 'Green Tea Frappe', price: 2.50, qty: 1 },
  { id: 4, name: 'Peach Lemonade', price: 2.80, qty: 1 },
  { id: 5, name: 'Sencha Green Tea', price: 3.00, qty: 1 },
])

// 计算小计
const subtotal = computed(() => {
  return billItems.value.reduce((sum, item) => sum + item.price * item.qty, 0)
})

// 税费 10%
const salesTax = computed(() => subtotal.value * 0.1)

// 折扣
const discount = ref(2.00)

// 总金额
const totalAmount = computed(() => subtotal.value + salesTax.value - discount.value)

const goBack = () => {
  router.back()
}

const handleConfirm = () => {
  console.log('Confirm bill')
}

const handleEditBill = () => {
  console.log('Edit bill')
}
</script>
