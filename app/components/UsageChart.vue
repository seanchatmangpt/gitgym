<template>
  <div class="bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-sm font-medium text-gray-900">{{ title }}</h3>
      <select
        v-model="selectedPeriod"
        class="text-sm rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600"
      >
        <option value="day">Last 24 hours</option>
        <option value="week">Last 7 days</option>
        <option value="month">Last 30 days</option>
      </select>
    </div>
    
    <div class="flex items-center justify-between mb-2">
      <div>
        <p class="text-2xl font-semibold text-gray-900">{{ formatNumber(total) }}</p>
        <p class="text-sm text-gray-500">Total requests</p>
      </div>
      <div :class="[
        'flex items-center space-x-1 text-sm',
        trend > 0 ? 'text-green-600' : 'text-red-600'
      ]">
        <ArrowUpIcon v-if="trend > 0" class="h-4 w-4" />
        <ArrowDownIcon v-else class="h-4 w-4" />
        <span>{{ Math.abs(trend) }}%</span>
      </div>
    </div>
    
    <div class="h-48 mt-4">
      <!-- Placeholder for chart -->
      <div class="w-full h-full bg-gray-50 rounded flex items-center justify-center">
        <p class="text-sm text-gray-500">Chart visualization coming soon</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  trend: {
    type: Number,
    required: true
  }
})

const selectedPeriod = ref('day')

function formatNumber(num) {
  return new Intl.NumberFormat().format(num)
}
</script>