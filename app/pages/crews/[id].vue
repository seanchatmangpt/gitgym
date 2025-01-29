<template>
  <div class="max-w-7xl mx-auto">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Configure your Crew
        </h2>
      </div>
    </div>

    <div class="bg-gray-50 rounded-lg p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Crew Assistant</h3>
      
      <div class="mb-6">
        <h4 class="text-sm font-medium text-gray-900 mb-3">Agents</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AgentCard
            v-for="agent in agents"
            :key="agent.role"
            v-bind="agent"
          />
        </div>
      </div>

      <TaskList :tasks="tasks" />

      <div class="mt-6">
        <label for="prompt" class="block text-sm font-medium text-gray-700 mb-2">
          Describe what you are trying to accomplish and what kind of automation you want to build
        </label>
        <textarea
          id="prompt"
          v-model="prompt"
          rows="4"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter your requirements..."
        />
        <div class="mt-4 flex justify-end">
          <button
            type="button"
            class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            @click="generateCrewPlan"
          >
            Generate Crew Plan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const prompt = ref('')

const agents = [
  {
    role: 'Feature Extractor',
    goal: 'Summarize and extract key features from the release notes.',
    backstory: 'As a Feature Extractor, your expertise lies in identifying and summarizing the most important aspects of new software releases. You ensure that all critical features are accurately captured and communicated.'
  },
  {
    role: 'Content Generator',
    goal: 'Draft a blog post using the summarized features and specified tone.',
    backstory: 'With a knack for crafting engaging content, you specialize in transforming technical details into compelling narratives that resonate with the target audience.'
  },
  {
    role: 'SEO Optimizer',
    goal: 'Review the draft for SEO effectiveness and suggest improvements.',
    backstory: 'As an SEO Optimizer, you excel in optimizing content to rank higher in search engines, ensuring the blog post reaches a wider audience while adhering to best SEO practices.'
  }
]

const tasks = [
  {
    description: 'Summarize the key features from the release notes to capture the essence of the new version\'s updates.',
    expectedOutput: 'A detailed summary of the main features of the new CrewAI version.',
    agentRole: 'Feature Extractor'
  },
  {
    description: 'Create a draft blog post using the summarized features and specified tone, targeting the intended audience.',
    expectedOutput: 'A well-structured draft blog post that highlights the new features of the CrewAI version.',
    agentRole: 'Content Generator'
  }
]

function generateCrewPlan() {
  // TODO: Implement crew plan generation
  console.log('Generating crew plan with prompt:', prompt.value)
}
</script>