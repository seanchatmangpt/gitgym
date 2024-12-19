<template>
  <div class="border-t border-gray-200 pt-4 space-y-3">
    <p class="font-medium text-gray-900">Performance Metrics</p>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(metric, key) in metrics"
        :key="key"
        class="bg-gray-50 p-4 rounded-lg"
      >
        <p class="text-sm font-medium text-gray-500">{{ formatMetricName(key) }}</p>
        <p class="text-lg font-semibold text-gray-900">{{ formatMetricValue(metric) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  metrics: {
    type: Object,
    required: true
  }
})

function formatMetricName(key) {
  return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

function formatMetricValue(value) {
  if (typeof value === 'number') {
    if (value < 1) {
      return `${(value * 100).toFixed(1)}%`
    }
    return value.toLocaleString()
  }
  return value
}
</script>

<style scoped>
/* Add additional styles if needed */
</style>
