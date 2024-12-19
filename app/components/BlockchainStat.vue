<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="p-5">
      <div class="flex items-center">
        <div class="flex-1">
          <p class="text-sm font-medium text-gray-500 truncate">{{ title }}</p>
          <p class="mt-1 text-3xl font-semibold text-green-600">{{ value }}</p>
        </div>
        <div class="flex items-center"><client-only>
          
          <span :class="[
            trend === 'up' ? 'text-green-600' : 'text-red-600',
            'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
          ]">
            <component 
              :is="trend === 'up' ? ArrowUpIcon : ArrowDownIcon"
              class="-ml-1 mr-0.5 h-4 w-4 flex-shrink-0 self-center" 
              aria-hidden="true" 
            />
            {{ percentage }}%
          </span>
        </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/solid'

defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  trend: {
    type: String,
    required: true,
    validator: (value) => ['up', 'down'].includes(value)
  },
  percentage: {
    type: Number,
    required: true
  }
})
</script>