<template>
  <div class="max-w-7xl mx-auto">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Agent Profiles
        </h2>
        <p class="mt-1 text-sm text-gray-500">
          Manage and monitor your AI agents
        </p>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
      <UButton
          type="button"
          class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          @click="createAgent"
        >
          Create Agent
        </UButton>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <AgentProfile v-for="agent in agents" :key="agent.id" :agent="agent" />
    </div>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify'

const agents = ref([
  {
    id: 1,
    name: 'Content Analyzer',
    role: 'Content Analysis Specialist',
    description: 'Specializes in analyzing and extracting key information from various content types.',
    iconType: 'lab',
    skills: ['Text Analysis', 'Sentiment Analysis', 'Key Points Extraction', 'Summary Generation'],
    isActive: true,
    metrics: {
      tasks_completed: 1234,
      success_rate: 0.98,
      average_response_time: '2.3s'
    }
  },
  {
    id: 2,
    name: 'Code Assistant',
    role: 'Development Helper',
    description: 'Assists with code review, bug detection, and optimization suggestions.',
    iconType: 'code',
    skills: ['Code Review', 'Bug Detection', 'Performance Optimization', 'Documentation'],
    isActive: true,
    metrics: {
      tasks_completed: 892,
      success_rate: 0.95,
      average_response_time: '1.8s'
    }
  },
  {
    id: 3,
    name: 'Data Processor',
    role: 'Data Analysis Expert',
    description: 'Processes and analyzes large datasets to extract meaningful insights.',
    iconType: 'lab',
    skills: ['Data Processing', 'Statistical Analysis', 'Visualization', 'Report Generation'],
    isActive: false,
    metrics: {
      tasks_completed: 567,
      success_rate: 0.92,
      average_response_time: '3.1s'
    }
  }
])

function createAgent() {
  toast.info('Agent creation coming soon!')
}
</script>
