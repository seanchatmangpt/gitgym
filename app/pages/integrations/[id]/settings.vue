<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100">
      Settings for {{ integration.name }}
    </h1>
    <UCard class="mt-6 shadow">
      <div class="space-y-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">API Key</h3>
        <div class="flex items-center space-x-2">
          <UInput :value="integration.apiKey" readonly class="flex-1" />
          <UButton label="Copy Key" icon="i-heroicons-clipboard" />
          <UButton label="Regenerate Key" color="primary" />
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const integration = {
  id: 1,
  name: 'Slack',
  apiKey: 'xoxb-1234567890-abcdef'
}
</script>
