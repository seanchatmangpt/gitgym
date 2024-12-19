<template>
  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Round ID</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">AI Crew</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Startup</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Round Size</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Round Status</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <client-only>
          
        <tr v-for="tx in transactions" :key="tx.hash" :data-test-id="'tx-' + tx.hash">
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900" data-test-id="tx-hash">
            {{ tx.hash }}
          </td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" data-test-id="tx-from">
            {{ tx.from }}
          </td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" data-test-id="tx-to">
            {{ tx.to }}
          </td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" data-test-id="tx-value">
            {{ tx.value }}
          </td>
          <td class="whitespace-nowrap px-3 py-4 text-sm">
            <span :class="[
              'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
              tx.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
              tx.status === 'pending' ? 'bg-blue-100 text-blue-800' : 
              'bg-red-100 text-red-800'
            ]">
              {{ tx.status === 'confirmed' ? 'Closed' : tx.status === 'pending' ? 'Due Diligence' : 'Passed' }}
            </span>
          </td>
        </tr>
        </client-only>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  transactions: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>