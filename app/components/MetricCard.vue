<template>
  <UCard>
<div class="bg-white shadow rounded-lg p-4">
  <div class="text-sm font-medium text-gray-500">{{ title }}</div>
  <div class="text-2xl font-bold text-gray-900">{{ value }}</div>
  <div class="text-sm text-gray-500 mt-1">{{ description }}</div>
  <div class="mt-2">
    <span
      class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full"
      :class="trend > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
    >
      <svg
        v-if="trend > 0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4 mr-1"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4 mr-1"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      {{ trend }}%
    </span>
  </div>
</div>

  </UCard>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  trend: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>