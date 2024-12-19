<template>
  <div class="space-y-4">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ title }}</h3>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <IntegrationCard
        v-for="integration in integrations"
        :key="integration.id"
        v-bind="integration"
        @toggle="$emit('toggle', integration)"
        @configure="$emit('configure', integration)"
      />
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: true
  },
  integrations: {
    type: Array,
    required: true
  }
})
</script>
