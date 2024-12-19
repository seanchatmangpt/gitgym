<template>
  <div class="max-w-7xl mx-auto">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          API Access
        </h2>
        <p class="mt-1 text-sm text-gray-500">
          Manage your API keys and monitor usage
        </p>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          @click="generateKey"
        >
          Generate New Key
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <UsageChart
        title="API Requests"
        :total="125436"
        :trend="12.5"
      />
      <UsageChart
        title="Active Crews"
        :total="45"
        :trend="-5.2"
      />
    </div>

    <div class="bg-white rounded-lg shadow">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-base font-semibold leading-6 text-gray-900 mb-4">API Keys</h3>
        <div class="space-y-4">
          <ApiKey
            v-for="key in apiKeys"
            :key="key.id"
            v-bind="key"
            @revoke="revokeKey(key)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify'
// import ApiKey from '~/components/api/ApiKey.vue'
// import UsageChart from '~/components/api/UsageChart.vue'

const apiKeys = ref([
  {
    id: 1,
    name: 'Production Key',
    apiKey: 'pk_live_51ABCDEFghijklmno',
    createdAt: '2024-03-15',
    isActive: true
  },
  {
    id: 2,
    name: 'Development Key',
    apiKey: 'pk_test_51ABCDEFghijklmno',
    createdAt: '2024-03-10',
    isActive: true
  },
  {
    id: 3,
    name: 'Staging Key',
    apiKey: 'pk_test_51XYZWVUtsrqponml',
    createdAt: '2024-02-28',
    isActive: false
  }
])

function generateKey() {
  toast.info('Key generation coming soon!')
}

function revokeKey(key) {
  toast.success(`Revoked key: ${key.name}`)
}
</script>
