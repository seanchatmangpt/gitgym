<template>
  <div class="max-w-7xl mx-auto">
    <UPageHeader>
      <template #title>Crews</template>
      <template #description>Manage and orchestrate your AI crews</template>
      <template #right>
        <UButton
          color="primary"
          icon="i-heroicons-plus"
          @click="createCrew"
        >
          Create Crew
        </UButton>
      </template>
    </UPageHeader>

    <UContainer>
        <UCard
        v-for="crew in crews"
        :key="crew.id"
        >
        <template #header>
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-medium text-gray-900">{{ crew.name }}</h3>
              <p class="text-sm text-gray-500">{{ crew.description }}</p>
            </div>
            <UBadge
              :color="crew.isActive ? 'green' : 'gray'"
              variant="subtle"
              size="sm"
            >
              {{ crew.isActive ? 'Active' : 'Inactive' }}
            </UBadge>
          </div>
        </template>

        <template #footer>
          <div class="flex items-center justify-between">
            <div class="flex -space-x-1">
              <UAvatar
                v-for="agent in crew.agents"
                :key="agent.id"
                :src="agent.avatar"
                :alt="agent.name"
                size="sm"
                class="-ml-1.5 ring-2 ring-white"
                :title="agent.name"
              />
            </div>
            <div class="flex space-x-2">
              <UButton
                color="gray"
                variant="outline"
                size="sm"
                @click="configureCrew(crew)"
              >
                Configure
              </UButton>
              <UButton
                color="primary"
                size="sm"
                @click="runCrew(crew)"
              >
                Run
              </UButton>
            </div>
          </div>
        </template>
        </UCard>
    </UContainer>
  </div>
</template>

<script setup>
const crews = ref([
  {
    id: 1,
    name: 'Application Screening Crew',
    description: 'Evaluates startup applications and provides initial assessment',
    isActive: true,
    agents: [
      { id: 1, name: 'Market Analyst', avatar: 'https://ui-avatars.com/api/?name=Market+Analyst&background=6366f1&color=fff' },
      { id: 2, name: 'Technical Evaluator', avatar: 'https://ui-avatars.com/api/?name=Technical+Evaluator&background=6366f1&color=fff' },
      { id: 3, name: 'Financial Assessor', avatar: 'https://ui-avatars.com/api/?name=Financial+Assessor&background=6366f1&color=fff' }
    ]
  },
  {
    id: 2,
    name: 'Due Diligence Crew',
    description: 'Performs comprehensive startup analysis and verification',
    isActive: true,
    agents: [
      { id: 4, name: 'Legal Reviewer', avatar: 'https://ui-avatars.com/api/?name=Legal+Reviewer&background=6366f1&color=fff' },
      { id: 5, name: 'Market Researcher', avatar: 'https://ui-avatars.com/api/?name=Market+Researcher&background=6366f1&color=fff' },
      { id: 6, name: 'Competition Analyst', avatar: 'https://ui-avatars.com/api/?name=Competition+Analyst&background=6366f1&color=fff' }
    ]
  },
  {
    id: 3,
    name: 'Startup Growth Crew',
    description: 'Provides tailored advice and growth strategies',
    isActive: false,
    agents: [
      { id: 7, name: 'Growth Strategist', avatar: 'https://ui-avatars.com/api/?name=Growth+Strategist&background=6366f1&color=fff' },
      { id: 8, name: 'Product Advisor', avatar: 'https://ui-avatars.com/api/?name=Product+Advisor&background=6366f1&color=fff' },
      { id: 9, name: 'Fundraising Coach', avatar: 'https://ui-avatars.com/api/?name=Fundraising+Coach&background=6366f1&color=fff' }
    ]
  },
  {
    id: 4,
    name: 'Investor Matching Crew',
    description: 'Matches startups with potential investors based on criteria',
    isActive: true,
    agents: [
      { id: 10, name: 'Investor Matcher', avatar: 'https://ui-avatars.com/api/?name=Investor+Matcher&background=6366f1&color=fff' },
      { id: 11, name: 'Pitch Advisor', avatar: 'https://ui-avatars.com/api/?name=Pitch+Advisor&background=6366f1&color=fff' },
      { id: 12, name: 'Deal Analyzer', avatar: 'https://ui-avatars.com/api/?name=Deal+Analyzer&background=6366f1&color=fff' }
    ]
  }
])

function createCrew() {
  useToast().add({
    title: 'Creating new crew...',
    color: 'blue'
  })
}

function configureCrew(crew) {
  navigateTo(`/crews/${crew.id}`)
}

function runCrew(crew) {
  useToast().add({
    title: `Running ${crew.name}...`,
    color: 'green'
  })
}
</script>
