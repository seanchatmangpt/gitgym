<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">{{ name }}</h3>
    </div>

    <div class="space-y-2">
      <div>
        <span class="block text-sm font-medium text-gray-500 dark:text-gray-400">URL:</span>
        <div
          class="flex items-center justify-between space-x-2 bg-gray-50 dark:bg-gray-700 rounded p-2"
        >
          <a
            :href="url"
            target="_blank"
            class="truncate text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >{{ url }}</a
          >
          <UButton
            icon="i-heroicons-clipboard-document"
            variant="ghost"
            size="sm"
            @click="copyUrl"
          />
        </div>
      </div>

      <div>
        <span class="block text-sm font-medium text-gray-500 dark:text-gray-400">Bearer Token:</span>
        <div
          class="flex items-center justify-between space-x-2 bg-gray-50 dark:bg-gray-700 rounded p-2"
        >
          <code class="truncate text-sm font-mono text-gray-900 dark:text-gray-300">{{ bearerToken }}</code>
          <UButton
            icon="i-heroicons-clipboard-document"
            variant="ghost"
            size="sm"
            @click="copyToken"
          />
        </div>
      </div>

      <div class="flex space-x-3">
        <UButton
          label="Re-deploy"
          color="primary"
          size="sm"
          variant="solid"
          icon="i-heroicons-arrow-path"
          @click="$emit('redeploy')"
        />
        <UButton
          label="Delete"
          color="red"
          size="sm"
          variant="outline"
          icon="i-heroicons-trash"
          @click="$emit('delete')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  bearerToken: {
    type: String,
    required: true
  }
})

function copyToken() {
  navigator.clipboard.writeText(props.bearerToken)
  toast.success('Bearer Token copied to clipboard!')
}

function copyUrl() {
  navigator.clipboard.writeText(props.url)
  toast.success('URL copied to clipboard!')
}
</script>
