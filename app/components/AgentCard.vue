<template>
  <div class="bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex items-center space-x-3 mb-3">
      <div class="bg-indigo-100 text-indigo-700 rounded-md px-2 py-1 text-sm font-medium">
        {{ role }}
      </div>
    </div>
    <div class="space-y-2">
      <h3 class="text-sm font-medium text-gray-900">Goal</h3>
      <p class="text-sm text-gray-600">{{ goal }}</p>
      
      <h3 class="text-sm font-medium text-gray-900">Backstory</h3>
      <p class="text-sm text-gray-600">{{ backstory }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  role: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  backstory: {
    type: String,
    required: true
  }
})
</script>