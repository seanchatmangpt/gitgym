<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100">
      Logs for {{ integration.name }}
    </h1>
    <UCard class="mt-6 shadow">
      <div class="space-y-4">
        <p v-for="log in logs" :key="log.id" class="text-sm text-gray-500 dark:text-gray-400">
          {{ log.timestamp }} - {{ log.message }}
        </p>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const integration = {
  id: 1,
  name: 'Slack'
}

const logs = [
  { id: 1, timestamp: '2024-12-18T10:00:00Z', message: 'Integration enabled' },
  { id: 2, timestamp: '2024-12-18T10:30:00Z', message: 'New API key generated' }
]
</script>
