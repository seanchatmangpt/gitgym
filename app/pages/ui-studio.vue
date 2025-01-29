<template>
  <div class="max-w-7xl mx-auto">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          UI Studio
        </h2>
        <p class="mt-1 text-sm text-gray-500">
          Design and test your automation workflows
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- Studio Crews -->
      <div class="lg:col-span-1 bg-white rounded-lg border border-gray-200 p-4">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Studio Crews</h3>
        <div class="text-sm text-gray-500">
          No Studio Crews created yet
        </div>
      </div>

      <!-- Main Content -->
      <div class="lg:col-span-3">
        <div class="bg-white rounded-lg border border-gray-200">
          <div class="px-4 py-5 sm:p-6">
            <!-- Chat Messages -->
            <div class="space-y-4 max-h-[600px] overflow-y-auto mb-4">
              <Message v-for="(msg, index) in messages" :key="index" :is-user="msg.isUser">
                <div v-if="msg.isUser" class="text-sm text-gray-900">
                  {{ msg.content }}
                </div>
                <div v-else class="space-y-4">
                  <div class="prose prose-sm">
                    <h3 class="text-base font-medium text-gray-900">Automation Plan: {{ msg.plan }}</h3>

                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-gray-900">Output:</h4>
                      <p class="mt-1 text-sm text-gray-600">{{ msg.output }}</p>
                    </div>

                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-gray-900">Inputs:</h4>
                      <ul class="mt-2 list-disc pl-5 text-sm text-gray-600">
                        <li v-for="input in msg.inputs" :key="input">{{ input }}</li>
                      </ul>
                    </div>

                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-gray-900">Agents:</h4>
                      <div class="mt-2 space-y-2">
                        <div v-for="(role, agent) in msg.agents" :key="agent" class="text-sm">
                          <span class="font-medium text-gray-900">{{ agent }}:</span>
                          <span class="text-gray-600">{{ role }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-gray-900">Tasks:</h4>
                      <div class="mt-2 space-y-2">
                        <div v-for="task in msg.tasks" :key="task.name" class="text-sm">
                          <span class="font-medium text-gray-900">{{ task.name }}:</span>
                          <span class="text-gray-600">{{ task.description }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Message>
            </div>

            <!-- Chat Input -->
            <ChatInput @send="sendMessage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const messages = ref([
  {
    isUser: true,
    content: 'I want to create an automation that automatically writes new blog content once we launch a new version of crewAI highlighting it\'s main new features'
  },
  {
    isUser: false,
    plan: 'Automatically generate blog content for new CrewAI version launches',
    output: 'A well-structured blog post that outlines and highlights the main new features of the latest CrewAI version.',
    inputs: [
      'Release notes or key features of the new version',
      'Target audience or tone of voice for the blog post',
      'Any specific keywords or SEO considerations'
    ],
    agents: {
      'Feature Extractor Agent': 'Gathers and summarizes the main features from the release notes.',
      'Content Generator Agent': 'Creates a draft blog post based on the summarized features and specified tone.',
      'SEO Optimizer Agent': 'Reviews the draft for SEO best practices and suggests improvements.'
    },
    tasks: [
      {
        name: 'Extract Features',
        description: 'Summarize the key features from the release notes (Assigned to: Feature Extractor Agent)'
      },
      {
        name: 'Draft Blog Post',
        description: 'Create a draft blog post using the summarized features and specified tone (Assigned to: Content Generator Agent)'
      },
      {
        name: 'Optimize for SEO',
        description: 'Review the draft for SEO and make necessary adjustments (Assigned to: SEO Optimizer Agent)'
      }
    ]
  }
])

function sendMessage(content) {
  // Add user message
  messages.value.push({
    isUser: true,
    content
  })

  // Simulate AI response
  setTimeout(() => {
    messages.value.push({
      isUser: false,
      plan: 'Custom automation plan',
      output: 'Expected output based on your requirements',
      inputs: ['Required input 1', 'Required input 2'],
      agents: {
        'Agent 1': 'Role description 1',
        'Agent 2': 'Role description 2'
      },
      tasks: [
        { name: 'Task 1', description: 'Task description 1' },
        { name: 'Task 2', description: 'Task description 2' }
      ]
    })
  }, 1000)
}
</script>
