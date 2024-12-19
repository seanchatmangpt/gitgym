<template>
  <div class="max-w-7xl mx-auto mt-6">
    <div class="md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">
          Deploy your crews from Github
        </h2>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0 space-x-3">
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          @click="updateConfiguration"
        >
          Update Configuration
        </button>
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="addEnvironmentVariable"
        >
          Add Environment Variable
        </button>
      </div>
    </div>

    <div class="mt-6">
      <select
        v-model="selectedRepo"
        class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-gray-100 dark:bg-gray-800 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option value="" class="text-gray-900 dark:text-gray-300">Select a repository</option>
        <option v-for="repo in repositories" :key="repo" :value="repo" class="text-gray-900 dark:text-gray-300">
          {{ repo }}
        </option>
      </select>

      <div class="mt-4 grid grid-cols-1 gap-6">
        <button
          type="button"
          class="block w-full rounded-md bg-gray-900 dark:bg-indigo-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 dark:hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-indigo-700"
          @click="deploy"
          :disabled="!selectedRepo"
        >
          Deploy
        </button>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <CrewCard
          v-for="crew in crews"
          :key="crew.name"
          v-bind="crew"
          @redeploy="redeployCrew(crew)"
          @delete="deleteCrew(crew)"
          class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg p-4"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify'

const selectedRepo = ref('')
const repositories = ref([
  'my-org/crew-project-1',
  'my-org/crew-project-2',
  'my-org/crew-project-3'
])

const crews = ref([
  {
    name: 'Lead Enrichment Crew',
    url: 'https://lead-enrichment-816b0664-9f2...',
    bearerToken: '6f636ea9eb1b'
  },
  {
    name: 'Customer Support Crew',
    url: 'https://customer-support-17eb5eea...',
    bearerToken: '5e5bec994da7'
  },
  {
    name: 'Project Planning Crew',
    url: 'https://project-planning-ab2bb43...',
    bearerToken: '6f6ece994da7'
  },
  {
    name: 'Sales Email Sender Crew',
    url: 'https://sales-email-sender...',
    bearerToken: '6b2e3b0fced5'
  },
  {
    name: 'Marketing Ideas Crew',
    url: 'https://marketing-ideas-for-a...',
    bearerToken: '26799af62494'
  },
  {
    name: 'Blog Generation Crew',
    url: 'https://blog-content-genera...',
    bearerToken: '26799af62444'
  }
])

function updateConfiguration() {
  toast.info('Configuration update coming soon!')
}

function addEnvironmentVariable() {
  toast.info('Environment variable management coming soon!')
}

function deploy() {
  if (!selectedRepo) return
  toast.success(`Deploying ${selectedRepo}...`)
}

function redeployCrew(crew) {
  toast.info(`Redeploying ${crew.name}...`)
}

function deleteCrew(crew) {
  toast.error(`Deleting ${crew.name}...`)
}
</script>
