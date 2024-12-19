<template>
  <UCard class="p-4">
    <div class="flex items-center justify-between mb-4">
      <div>
        <UText class="font-medium">{{ name }}</UText>
        <UText class="text-sm text-gray-500">Created {{ createdAt }}</UText>
      </div>
      <div class="flex items-center space-x-2">
        <UBadge
          :color="isActive ? 'green' : 'gray'"
          variant="subtle"
          size="sm"
        >
          {{ isActive ? 'Active' : 'Inactive' }}
        </UBadge>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-trash"
          size="xs"
          @click="$emit('revoke')"
        />
      </div>
    </div>
    
    <div class="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
      <UText class="font-mono">{{ maskKey(apiKey) }}</UText>
      <UButton
        color="primary"
        variant="ghost"
        icon="i-heroicons-clipboard"
        size="xs"
        @click="copyKey"
      />
    </div>
  </UCard>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  apiKey: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

function maskKey(key) {
  return `${key.slice(0, 8)}...${key.slice(-8)}`
}

function copyKey() {
  navigator.clipboard.writeText(props.apiKey)
  useToast().add({
    title: 'API key copied to clipboard!',
    color: 'green'
  })
}
</script>