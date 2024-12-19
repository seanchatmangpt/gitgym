<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Funding Rounds
        </h2>
        <p class="mt-1 text-sm text-gray-500">
          Track live startup funding rounds and investments
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8" data-test-id="blockchain-stats">
      <BlockchainStat 
        title="Total Transactions" 
        :value="stats.totalTransactions" 
        trend="up" 
        :percentage="12"
        data-test-id="total-transactions"
      />
      <BlockchainStat 
        title="Total Volume" 
        :value="stats.totalVolume" 
        trend="up" 
        :percentage="8"
        data-test-id="total-volume"
      />
      <BlockchainStat 
        title="Active Wallets" 
        :value="stats.activeWallets" 
        trend="up" 
        :percentage="5"
        data-test-id="active-wallets"
      />
    </div>

    <div class="bg-white shadow-sm rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="mt-4 sm:mt-0 sm:ml-4">
            <form @submit.prevent="handleSearch" data-test-id="search-form">
              <div class="flex items-center">
                <input
                  type="text"
                  v-model="searchQuery"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search by transaction hash..."
                />
                <button
                  type="submit"
                  class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div class="mt-4 sm:mt-0 sm:ml-4">
            <select
              v-model="statusFilter"
              class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              data-test-id="status-filter"
            >
              <option value="">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>

        <div class="mt-8" data-test-id="transaction-list">

          <client-only>
            
          <TransactionList 
            :transactions="filteredTransactions" 
            :loading="loading"
          />
          </client-only>
        </div>

        <div 
          v-if="error" 
          class="mt-4 text-sm text-red-600"
          data-test-id="error-message"
        >
          {{ error }}
        </div>

        <div 
          v-if="transactions.length > 0" 
          class="mt-4 flex items-center justify-between"
          data-test-id="pagination"
        >
          <button
            class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            :disabled="currentPage === 1"
            @click="prevPage"
          >
            Previous
          </button>
          <span class="text-sm text-gray-700" data-test-id="page-2">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button
            class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            :disabled="currentPage === totalPages"
            @click="nextPage"
            data-test-id="next-page"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const statusFilter = ref('')
const currentPage = ref(1)
const loading = ref(false)
const error = ref(null)

const stats = reactive({
  totalTransactions: '324',
  totalVolume: '$158.2M',
  activeWallets: '85'
})

const transactions = ref([
  {
    hash: '0x7a3b...',
    from: 'Seed Round Crew',
    to: 'AIFlow Technologies',
    value: '$500K',
    status: 'confirmed',
    timestamp: '2024-04-15T10:30:00Z'
  },
  {
    hash: '0x9c4d...',
    from: 'Series A Crew',
    to: 'BlockHealth',
    value: '$12M',
    status: 'pending',
    timestamp: '2024-04-15T11:45:00Z'
  },
  {
    hash: '0x3f2e...',
    from: 'Due Diligence Crew',
    to: 'GreenChain Solutions',
    value: '$8M',
    status: 'confirmed',
    timestamp: '2024-04-15T09:15:00Z'
  },
  {
    hash: '0x5d8a...',
    from: 'Series B Crew',
    to: 'AutoFleet',
    value: '$25M',
    status: 'pending',
    timestamp: '2024-04-15T12:20:00Z'
  },
  {
    hash: '0x2e4f...',
    from: 'Pre-Seed Crew',
    to: 'CyberGuard AI',
    value: '$150K',
    status: 'confirmed',
    timestamp: '2024-04-15T08:45:00Z'
  },
  {
    hash: '0x8b1c...',
    from: 'Growth Round Crew',
    to: 'DataMesh',
    value: '$35M',
    status: 'pending',
    timestamp: '2024-04-15T13:15:00Z'
  }
])

const totalPages = computed(() => Math.ceil(transactions.value.length / 10))

const filteredTransactions = computed(() => {
  let filtered = [...transactions.value]
  
  if (statusFilter.value) {
    filtered = filtered.filter(tx => tx.status === statusFilter.value)
  }
  
  if (searchQuery.value) {
    filtered = filtered.filter(tx => tx.hash.includes(searchQuery.value))
  }
  
  return filtered
})

function handleSearch() {
  if (!searchQuery.value) {
    error.value = 'Please enter a valid transaction hash'
    return
  }
  // Implement search logic
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// Subscribe to blockchain events
onMounted(() => {
  // Implement WebSocket connection for real-time updates
})
</script>