<template>
  <UCard>
    <template #header>
      <h3 class="text-base font-semibold">Top Performing Agents</h3>
    </template>
    
    <UTable
      :rows="agents"
      :columns="columns"
    >
      <template #agent-data="{ row }">
        <div class="flex items-center">
          <UAvatar
            :src="`https://ui-avatars.com/api/?name=${row.name}&background=6366f1&color=fff`"
            size="lg"
            class="mr-4"
          />
          <div>
            <div class="font-medium">{{ row.name }}</div>
            <div class="text-gray-500">{{ row.role }}</div>
          </div>
        </div>
      </template>
      
      <template #success-rate-data="{ row }">
        {{ row.successRate }}%
      </template>
    </UTable>
  </UCard>
</template>

<script setup>
const columns = [
  {
    key: 'agent',
    label: 'Agent'
  },
  {
    key: 'tasksCompleted',
    label: 'Tasks Completed'
  },
  {
    key: 'successRate',
    label: 'Success Rate'
  },
  {
    key: 'avgResponseTime',
    label: 'Avg Response Time'
  }
]

defineProps({
  agents: {
    type: Array,
    required: true
  }
})
</script>