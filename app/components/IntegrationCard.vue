<template>
  <UCard
    :ui="{ rounded: 'rounded-lg', background: 'bg-white dark:bg-gray-800' }"
    class="shadow-md"
  >
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-4">
        <img :src="icon" :alt="name" class="h-12 w-12 rounded" />
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">{{ name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ description }}</p>
        </div>
      </div>
      <!-- Toggle -->
      <UToggle v-model="localEnabled" @update:modelValue="toggleIntegration" />
    </div>

    <!-- Enabled State -->
    <div v-if="localEnabled" class="space-y-4">
      <!-- API Key Section -->
      <div v-if="apiKey" class="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 p-2 rounded">
        <code class="text-sm font-mono text-gray-900 dark:text-gray-300">{{ maskedKey }}</code>
        <UButton
          icon="i-heroicons-clipboard-document"
          variant="ghost"
          color="gray"
          size="xs"
          @click="copyKey"
        />
      </div>

      <!-- Configure Button -->
      <UButton
        label="Configure"
        icon="i-heroicons-cog-6-tooth"
        color="gray"
        size="sm"
        variant="outline"
        @click="$emit('configure')"
      />
    </div>
  </UCard>
</template>

<script setup>

const props = defineProps({
  name: String,
  description: String,
  icon: String,
  isEnabled: Boolean,
  apiKey: String
})

const emit = defineEmits(['toggle', 'configure'])

const {localEnabled, toggleIntegration, copyKey, maskKey} = useIntegrationCard(props, emit)

// Computed masked API key for display
const maskedKey = computed(() => maskKey(props.apiKey))
</script>
