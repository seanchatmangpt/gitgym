<script setup lang="ts">

definePageMeta({
  layout: 'dashboard'
})

const defaultColumns = [
  {
    key: 'id',
    label: 'ID',
    sortable: true
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true
  },
  {
    key: 'location',
    label: 'Location',
    sortable: true
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true
  },
  {
    key: 'tasksCompleted',
    label: 'Tasks Completed',
    sortable: true
  },
  {
    key: 'performanceScore',
    label: 'Performance Score (%)',
    sortable: true
  }
]

const q = ref('')
const selected = ref<Agent[]>([])
const selectedColumns = ref(defaultColumns)
const selectedStatuses = ref<string[]>([])
const selectedLocations = ref<string[]>([])
const sort = ref({ column: 'id', direction: 'asc' as const })
const input = ref<{ input: HTMLInputElement }>()
const isNewAgentModalOpen = ref(false)

const columns = computed(() => defaultColumns.filter(column => selectedColumns.value.includes(column)))

const query = computed(() => ({
  q: q.value,
  statuses: selectedStatuses.value,
  locations: selectedLocations.value,
  sort: sort.value.column,
  order: sort.value.direction
}))

const { data: agents, pending } = await useFetch<Agent[]>('/api/agents', { query, default: () => [] })

const defaultLocations = agents.value.reduce((acc, agent) => {
  if (!acc.includes(agent.location)) {
    acc.push(agent.location)
  }
  return acc
}, [] as string[])

const defaultStatuses = agents.value.reduce((acc, agent) => {
  if (!acc.includes(agent.status)) {
    acc.push(agent.status)
  }
  return acc
}, [] as string[])

function onSelect(row: Agent) {
  const index = selected.value.findIndex(item => item.id === row.id)
  if (index === -1) {
    selected.value.push(row)
  } else {
    selected.value.splice(index, 1)
  }
}

defineShortcuts({
  '/': () => {
    input.value?.input?.focus()
  }
})
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar
        title="Agents"
        :badge="agents.length"
      >
        <template #right>
          <UInput
            ref="input"
            v-model="q"
            icon="i-heroicons-funnel"
            autocomplete="off"
            placeholder="Filter agents..."
            class="hidden lg:block"
            @keydown.esc="$event.target.blur()"
          >
            <template #trailing>
              <UKbd value="/" />
            </template>
          </UInput>

          <UButton
            label="New Agent"
            trailing-icon="i-heroicons-plus"
            color="gray"
            @click="isNewAgentModalOpen = true"
          />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>
          <USelectMenu
            v-model="selectedStatuses"
            icon="i-heroicons-check-circle"
            placeholder="Status"
            multiple
            :options="defaultStatuses"
            :ui-menu="{ option: { base: 'capitalize' } }"
          />
          <USelectMenu
            v-model="selectedLocations"
            icon="i-heroicons-map-pin"
            placeholder="Location"
            :options="defaultLocations"
            multiple
          />
        </template>

        <template #right>
          <USelectMenu
            v-model="selectedColumns"
            icon="i-heroicons-adjustments-horizontal-solid"
            :options="defaultColumns"
            multiple
            class="hidden lg:block"
          >
            <template #label>
              Display
            </template>
          </USelectMenu>
        </template>
      </UDashboardToolbar>

      <UDashboardModal
        v-model="isNewAgentModalOpen"
        title="New Agent"
        description="Add a new agent to your database"
        :ui="{ width: 'sm:max-w-md' }"
      >
        <!-- ~/components/agents/AgentsForm.vue -->
        <AgentsForm @close="isNewAgentModalOpen = false" />
      </UDashboardModal>

      <UTable
        v-model="selected"
        v-model:sort="sort"
        :rows="agents"
        :columns="columns"
        :loading="pending"
        sort-mode="manual"
        class="w-full"
        :ui="{ divide: 'divide-gray-200 dark:divide-gray-800' }"
        @select="onSelect"
      >
        <template #name-data="{ row }">
          <div class="flex items-center gap-3">
            <UAvatar
              v-bind="row.avatar"
              :alt="row.name"
              size="xs"
            />
            <span class="text-gray-900 dark:text-white font-medium">{{ row.name }}</span>
          </div>
        </template>

        <template #status-data="{ row }">
          <UBadge
            :label="row.status"
            :color="row.status === 'subscribed' ? 'green' : row.status === 'bounced' ? 'orange' : 'red'"
            variant="subtle"
            class="capitalize"
          />
        </template>

        <template #tasksCompleted-data="{ row }">
          <span>{{ row.tasksCompleted }}</span>
        </template>

        <template #performanceScore-data="{ row }">
          <span>{{ row.performanceScore }}%</span>
        </template>
      </UTable>
    </UDashboardPanel>
  </UDashboardPage>
</template>
