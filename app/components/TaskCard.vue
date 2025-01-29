<template>
  <div 
    class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-move"
    :class="{ 'border-indigo-500': isDragging }"
  >
    <div class="flex items-center justify-between mb-3">
      <span :class="[
        'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
        priorityClasses[priority]
      ]">
        {{ priority }}
      </span>
      <button
        type="button"
        class="text-gray-400 hover:text-gray-500"
        @click="$emit('edit')"
      >
        <PencilIcon class="h-4 w-4" />
      </button>
    </div>
    
    <h3 class="text-sm font-medium text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-600 mb-3">{{ description }}</p>
    
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <CalendarIcon class="h-4 w-4 text-gray-400" />
        <span class="text-xs text-gray-500">{{ dueDate }}</span>
      </div>
      
      <div class="flex -space-x-1">
        <img
          v-for="agent in assignedAgents"
          :key="agent.id"
          :src="agent.avatar"
          :alt="agent.name"
          class="h-6 w-6 rounded-full ring-2 ring-white"
          :title="agent.name"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { CalendarIcon, PencilIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    default: 'Medium',
    validator: (value) => ['High', 'Medium', 'Low'].includes(value)
  },
  dueDate: {
    type: String,
    required: true
  },
  assignedAgents: {
    type: Array,
    default: () => []
  },
  isDragging: {
    type: Boolean,
    default: false
  }
})

const priorityClasses = {
  High: 'bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20',
  Medium: 'bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20',
  Low: 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20'
}
</script>