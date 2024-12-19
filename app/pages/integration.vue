<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">
          Integrations
        </h2>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Connect your favorite tools and services
        </p>
      </div>
    </div>

    <div class="space-y-8">
      <IntegrationCategory
        v-for="category in categories"
        :key="category.title"
        v-bind="category"
        @toggle="toggleIntegration"
        @configure="configureIntegration"
      />
    </div>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify'

const categories = ref([
  {
    title: 'Communication',
    integrations: [
      {
        id: 1,
        name: 'Slack',
        description: 'Send notifications and updates to your Slack channels',
        icon: 'https://cdn.svgporn.com/logos/slack-icon.svg',
        isEnabled: true,
        apiKey: 'xoxb-1234567890-abcdef'
      },
      {
        id: 2,
        name: 'Discord',
        description: 'Integrate with Discord for team communication',
        icon: 'https://cdn.svgporn.com/logos/discord-icon.svg',
        isEnabled: false
      }
    ]
  },
  {
    title: 'Development',
    integrations: [
      {
        id: 3,
        name: 'GitHub',
        description: 'Connect your GitHub repositories and automate workflows',
        icon: 'https://cdn.svgporn.com/logos/github-icon.svg',
        isEnabled: true,
        apiKey: 'ghp_123456789abcdef'
      },
      {
        id: 4,
        name: 'GitLab',
        description: 'Integrate with GitLab for CI/CD and code management',
        icon: 'https://cdn.svgporn.com/logos/gitlab.svg',
        isEnabled: false
      }
    ]
  }
])

function toggleIntegration(integration) {
  toast.success(`${integration.name} integration ${integration.isEnabled ? 'disabled' : 'enabled'}`)
}

function configureIntegration(integration) {
  toast.info(`Configuring ${integration.name} integration...`)
}
</script>
