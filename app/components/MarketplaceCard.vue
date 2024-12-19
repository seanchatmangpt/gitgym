<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-300"
  >
    <div class="p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3">
          <!-- Icon -->
          <div
            class="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/30 rounded-lg"
          >
            <component
              :is="icon"
              class="h-6 w-6 text-indigo-600 dark:text-indigo-400"
              aria-hidden="true"
            />
          </div>
          <!-- Title -->
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight"
          >
            {{ title }}
          </h3>
        </div>
        <!-- Category Badge -->
        <span
          class="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300"
        >
          {{ category }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {{ description }}
      </p>

      <!-- Footer -->
      <div class="flex items-center justify-between">
        <!-- Metadata -->
        <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>By {{ author }}</span>
          <span>•</span>
          <span>{{ downloads }} downloads</span>
        </div>

        <!-- Install Button -->
        <UButton
          label="Install"
          icon="i-heroicons-arrow-down-circle"
          color="primary"
          class="text-sm font-semibold"
          @click="$emit('install')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  DocumentTextIcon,
  CubeIcon,
  UserGroupIcon,
  CodeBracketIcon,
} from '@heroicons/vue/24/outline'

const icons = {
  document: DocumentTextIcon,
  cube: CubeIcon,
  users: UserGroupIcon,
  code: CodeBracketIcon,
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  downloads: {
    type: Number,
    default: 0,
  },
  iconType: {
    type: String,
    default: 'code',
    validator: (value) => ['document', 'cube', 'users', 'code'].includes(value),
  },
})

const icon = computed(() => icons[props.iconType])
</script>
