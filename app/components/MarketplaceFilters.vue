<template>
  <div class="rounded-lg shadow-sm p-4 mb-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
      <!-- Search Input -->
      <div class="relative flex-1 mb-4 sm:mb-0">
        <UInput
          v-model="searchQuery"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="Search marketplace..."
          :trailing="false"
          clearable
          class="w-full"
          @input="$emit('search', searchQuery)"
        />
      </div>

      <!-- Filters -->
      <div class="flex space-x-4">
        <!-- Category Filter -->
        <USelect
          v-model="selectedCategory"
          :options="categories"
          placeholder="Filter by Category"
          color="white"
          variant="outline"
          @change="$emit('filter', selectedCategory)"
        />

        <!-- Sort Selector -->
        <USelect
          v-model="sortBy"
          :options="sortOptions"
          placeholder="Sort by"
          color="white"
          variant="outline"
          @change="$emit('sort', sortBy)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    default: () => ['All Categories', 'Communication', 'Development', 'Analytics']
  }
})

const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref('popular')
const sortOptions = ['Most Popular', 'Most Recent', 'Name']
</script>
