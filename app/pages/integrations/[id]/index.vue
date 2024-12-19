<template>
  <div class="max-w-4xl mx-auto px-4 py-6 space-y-8">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100">
        {{ integration.name }}
      </h1>
      <UButton label="Back to Integrations" to="/integrations" variant="outline" color="gray" />
    </div>

    <UCard class="shadow">
      <div class="space-y-4">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ integration.description }}
        </p>
        <UToggle v-model="integration.isEnabled" label="Enable Integration" />
        <div>
          <UButton
            label="Settings"
            :to="`/integrations/${integration.id}/settings`"
            color="primary"
            icon="i-heroicons-cog-6-tooth"
          />
          <UButton
            label="View Logs"
            :to="`/integrations/${integration.id}/logs`"
            color="gray"
            variant="outline"
            icon="i-heroicons-document-text"
          />
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const integration = {
  id: 1,
  name: 'Slack',
  description: 'Slack integration details',
  isEnabled: true
}
</script>
