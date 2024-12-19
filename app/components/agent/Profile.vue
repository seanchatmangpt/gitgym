<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <UIcon
            :name="iconName"
            class="h-10 w-10 bg-primary-600 text-white rounded-lg"
          />
          <div>
            <h3 class="text-lg font-medium text-gray-900">{{ agent.name }}</h3>
            <p class="text-sm text-gray-500">{{ agent.role }}</p>
          </div>
        </div>
        <UBadge
          :color="agent.isActive ? 'green' : 'gray'"
          variant="subtle"
          size="sm"
        >
          {{ agent.isActive ? 'Active' : 'Inactive' }}
        </UBadge>
      </div>
    </template>

    <div class="space-y-4">
      <div>
        <p class="font-medium mb-2">Description</p>
        <p class="text-sm text-gray-600">{{ agent.description }}</p>
      </div>

      <div>
        <UText class="font-medium mb-2">Skills</UText>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="skill in agent.skills"
            :key="skill"
            color="primary"
            variant="subtle"
            size="sm"
          >
            {{ skill }}
          </UBadge>
        </div>
      </div>

      <AgentMetrics :metrics="agent.metrics" />
    </div>
  </UCard>
</template>

<script setup>

const props = defineProps({
  agent: {
    type: Object,
    required: true,
    // validator: (value) => {
    //   return (
    //     value.name &&
    //     value.role &&
    //     value.description &&
    //     Array.isArray(value.skills) &&
    //     value.metrics &&
    //     typeof value.isActive === 'boolean' &&
    //     ['user', 'lab', 'code'].includes(value.iconType)
    //   );
    // }
  }
})

const iconName = computed(() => {
  const iconMap = {
    user: 'i-heroicons-user-circle',
    lab: 'i-heroicons-beaker',
    code: 'i-heroicons-code-bracket'
  }
  return iconMap[props.agent.iconType] || iconMap.user
})
</script>

<style scoped>
/* Add additional styles if needed */
</style>
