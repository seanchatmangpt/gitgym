<template>
  <div class="max-w-7xl mx-auto px-4 py-6 space-y-8">
    <!-- Page Header -->
    <div class="md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1">
        <h1 class="text-3xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:truncate sm:tracking-tight">
          Enterprise Integrations
        </h1>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Manage your organization's integrations and services.
        </p>
      </div>
      <div class="flex space-x-3">
        <UButton label="Add Integration" icon="i-heroicons-plus" color="primary" />
        <UButton label="Documentation" variant="outline" color="gray" />
      </div>
    </div>

    <!-- Search and Filter Section -->
    <div class="flex flex-wrap items-center justify-between space-y-4 md:space-y-0">
      <div class="flex flex-1">
        <UInput
          placeholder="Search integrations..."
          icon="i-heroicons-magnifying-glass"
          clearable
          class="w-full md:w-auto"
        />
      </div>
      <div class="flex space-x-3">
        <USelect
          placeholder="Filter by Category"
          :options="['All', 'Communication', 'Development', 'Analytics']"
        />
        <UToggle v-model="showEnabledOnly" label="Show Enabled Only" />
      </div>
    </div>

    <!-- Integration Categories -->
    <div class="space-y-8">
      <IntegrationCategory
        v-for="category in groupedCategories"
        :key="category.title"
        v-bind="category"
        @toggle="toggleIntegration"
        @configure="configureIntegration"
      />
    </div>
  </div>
</template>

<script setup>
const showEnabledOnly = ref(false)

// Placeholder grouped categories
const groupedCategories = [
  {
    title: 'Communication',
    integrations: [
      { id: 1, name: 'Slack', description: 'Slack integration details', isEnabled: true },
      { id: 2, name: 'Discord', description: 'Discord integration details', isEnabled: false }
    ]
  },
  {
    title: 'Development',
    integrations: [
      { id: 3, name: 'GitHub', description: 'GitHub integration details', isEnabled: true },
      { id: 4, name: 'GitLab', description: 'GitLab integration details', isEnabled: false }
    ]
  }
]

function toggleIntegration(id) {
  console.log(`Toggling integration with ID ${id}`)
}

function configureIntegration(id) {
  console.log(`Configuring integration with ID ${id}`)
}
</script>
