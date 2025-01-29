<template>
  <div class="bg-white rounded-lg border border-gray-200 mt-6">
    <div class="px-4 py-3 border-b border-gray-200">
      <h2 class="text-lg font-medium text-gray-900">Tasks</h2>
    </div>
    <div class="p-4">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Description</th>
            <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Expected Output</th>
            <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Agent Role</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="task in tasks" :key="task.description">
            <td class="py-3 text-sm text-gray-900">{{ task.description }}</td>
            <td class="py-3 text-sm text-gray-900">{{ task.expectedOutput }}</td>
            <td class="py-3 text-sm text-gray-900">{{ task.agentRole }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tasks: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>