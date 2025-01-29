<template>
  <div class="bg-gray-50 p-4 rounded-lg min-h-[600px] w-80">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-sm font-medium text-gray-900">
        {{ title }}
        <span class="ml-2 text-gray-500">{{ tasks.length }}</span>
      </h3>
      <button
        v-if="canAddTask"
        type="button"
        class="p-1 text-gray-400 hover:text-gray-500"
        @click="$emit('add')"
      >
        <PlusIcon class="h-5 w-5" />
      </button>
    </div>

    <div class="space-y-3">
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        v-bind="task"
        @edit="$emit('edit', task)"
      />
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'

defineProps({
  title: {
    type: String,
    required: true
  },
  tasks: {
    type: Array,
    default: () => []
  },
  canAddTask: {
    type: Boolean,
    default: true
  }
})
</script>
