<template>
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1">
        <h2 class="text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight">
          Enterprise Marketplace
        </h2>
        <p class="mt-2 text-lg text-gray-500">
          Discover exclusive, Fortune 500-ready solutions starting at $100,000.
        </p>
      </div>
    </div>

    <!-- Filters -->
    <MarketplaceFilters
      :categories="categories"
      @search="handleSearch"
      @filter="handleFilter"
      @sort="handleSort"
    />

    <!-- Featured Solutions -->
    <div class="mb-8">
      <h3 class="text-2xl font-semibold text-gray-800">Premium Solutions</h3>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        <MarketplaceCard
          v-for="item in spotlightItems"
          :key="item.id"
          v-bind="item"
          @inquire="handleInquire(item)"
        />
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <MarketplaceCard
        v-for="item in filteredItems"
        :key="item.id"
        v-bind="item"
        @inquire="handleInquire(item)"
      />
    </div>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify'

const categories = ['Custom Crews', 'Training Modules', 'Automation Packages', 'Consulting Services']

const marketplaceItems = ref([
  {
    id: 1,
    title: 'Corporate Compliance Training Suite',
    description: 'SCORM-compliant modules covering compliance standards for Fortune 500 organizations.',
    category: 'Training Modules',
    author: 'Global Training Co.',
    price: '$150,000',
    enterpriseReady: true,
    features: ['SCORM', 'Compliance', 'Customizable'],
    downloads: 80,
    iconType: 'document'
  },
  {
    id: 2,
    title: 'AI-Powered Financial Analysis Crew',
    description: 'Advanced AI solutions for processing financial data and generating predictive insights.',
    category: 'Custom Crews',
    author: 'Data Insights Inc.',
    price: '$250,000',
    enterpriseReady: true,
    features: ['Finance', 'Data Analysis', 'Predictive Insights'],
    downloads: 45,
    iconType: 'code'
  },
  {
    id: 3,
    title: 'Logistics Optimization Crew',
    description: 'AI automation for logistics scheduling, inventory management, and route optimization.',
    category: 'Automation Packages',
    author: 'LogiAI Solutions',
    price: '$300,000',
    enterpriseReady: true,
    features: ['Logistics', 'Scheduling', 'Inventory'],
    downloads: 30,
    iconType: 'truck'
  },
  {
    id: 4,
    title: 'Leadership Development Training',
    description: 'Comprehensive leadership training for executives, built for Fortune 500 needs.',
    category: 'Training Modules',
    author: 'Executive Education Inc.',
    price: '$200,000',
    enterpriseReady: true,
    features: ['Leadership', 'SCORM', 'Custom Curriculum'],
    downloads: 60,
    iconType: 'users'
  },
  {
    id: 5,
    title: 'Customer Journey Automation Crew',
    description: 'Transform your customer journey with end-to-end AI-driven automation.',
    category: 'Custom Crews',
    author: 'CX Automation Co.',
    price: '$180,000',
    enterpriseReady: true,
    features: ['Customer Experience', 'Journey Automation', 'End-to-End'],
    downloads: 70,
    iconType: 'user-gear'
  }
])

const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref('popular')

const spotlightItems = computed(() => {
  return marketplaceItems.value.filter(item => item.price.replace('$', '').replace(',', '') >= 100000).slice(0, 3)
})

const filteredItems = computed(() => {
  let items = [...marketplaceItems.value]

  if (searchQuery.value) {
    items = items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (selectedCategory.value) {
    items = items.filter(item => item.category === selectedCategory.value)
  }

  if (sortBy.value === 'popular') {
    items.sort((a, b) => b.downloads - a.downloads)
  } else if (sortBy.value === 'recent') {
    items.sort((a, b) => b.id - a.id)
  } else if (sortBy.value === 'name') {
    items.sort((a, b) => a.title.localeCompare(b.title))
  }

  return items
})

function handleSearch(query) {
  searchQuery.value = query
}

function handleFilter(category) {
  selectedCategory.value = category
}

function handleSort(sort) {
  sortBy.value = sort
}

function handleInquire(item) {
  toast.info(`Inquiring about ${item.title}. Our team will reach out to you.`)
}
</script>
