<template>
  <div class="max-w-7xl mx-auto">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Analytics Dashboard
        </h2>
        <p class="mt-1 text-sm text-gray-500">
          Monitor crew performance and agent activity
        </p>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          @click="exportData"
        >
          Export Data
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      <MetricCard
        v-for="metric in metrics"
        :key="metric.title"
        v-bind="metric"
      />
    </div>
    <div class="space-y-6">
      <TopAgentsTable :agents="topAgents" />
    </div>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify'
// import MetricCard from '~/components/analytics/MetricCard.vue'
// import TopAgentsTable from '~/components/analytics/TopAgentsTable.vue'

const metrics = ref([
  {
    title: 'Total Tasks',
    value: '2,543',
    trend: 12.5,
    description: 'Total tasks completed across all crews'
  },
  {
    title: 'Active Crews',
    value: '45',
    trend: 8.2,
    description: 'Number of crews currently active'
  },
  {
    title: 'Success Rate',
    value: '98.2%',
    trend: 3.1,
    description: 'Overall task success rate'
  },
  {
    title: 'Avg Response Time',
    value: '1.8s',
    trend: -15.4,
    description: 'Average agent response time'
  }
])

const topAgents = ref([
  {
    id: 1,
    name: 'Content Analyzer',
    role: 'Content Analysis Specialist',
    tasksCompleted: 1234,
    successRate: 98.5,
    avgResponseTime: '2.3s'
  },
  {
    id: 2,
    name: 'Code Assistant',
    role: 'Development Helper',
    tasksCompleted: 892,
    successRate: 95.2,
    avgResponseTime: '1.8s'
  },
  {
    id: 3,
    name: 'Data Processor',
    role: 'Data Analysis Expert',
    tasksCompleted: 567,
    successRate: 92.8,
    avgResponseTime: '3.1s'
  }
])

function exportData() {
  toast.info('Exporting analytics data...')
}
</script>
