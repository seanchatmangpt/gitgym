<template>
  <div class="max-w-full mx-auto px-4">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Task Planner
        </h2>
        <p class="mt-1 text-sm text-gray-500">
          Plan and manage tasks for your AI agents
        </p>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          @click="createTask"
        >
          Create Task
        </button>
      </div>
    </div>

    <div class="flex space-x-4 overflow-x-auto pb-6">
      <TaskColumn
        v-for="column in columns"
        :key="column.id"
        :title="column.title"
        :tasks="getTasksByStatus(column.id)"
        :can-add-task="column.canAddTask"
        @add="createTask"
        @edit="editTask"
      />
    </div>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify'

const columns = [
  { id: 'todo', title: 'To Do', canAddTask: true },
  { id: 'in_progress', title: 'In Progress', canAddTask: false },
  { id: 'review', title: 'In Review', canAddTask: false },
  { id: 'done', title: 'Done', canAddTask: false }
]

const tasks = ref([
  {
    id: 1,
    title: 'Initial Screening: TechFlow AI',
    description: 'Review application for AI-powered workflow automation startup. Series A potential.',
    status: 'todo',
    priority: 'High',
    dueDate: '2024-04-15',
    assignedAgents: [
      { id: 1, name: 'Market Analyst', avatar: 'https://ui-avatars.com/api/?name=Market+Analyst&background=6366f1&color=fff' },
      { id: 2, name: 'Technical Evaluator', avatar: 'https://ui-avatars.com/api/?name=Technical+Evaluator&background=6366f1&color=fff' }
    ]
  },
  {
    id: 2,
    title: 'Due Diligence: QuantumHealth',
    description: 'Verify technical claims and market size for quantum computing healthcare startup.',
    status: 'in_progress',
    priority: 'Medium',
    dueDate: '2024-04-16',
    assignedAgents: [
      { id: 3, name: 'Legal Reviewer', avatar: 'https://ui-avatars.com/api/?name=Legal+Reviewer&background=6366f1&color=fff' },
      { id: 4, name: 'Market Researcher', avatar: 'https://ui-avatars.com/api/?name=Market+Researcher&background=6366f1&color=fff' }
    ]
  },
  {
    id: 3,
    title: 'Growth Strategy: EcoChain',
    description: 'Develop scaling strategy for sustainable supply chain platform. Currently at $2M ARR.',
    status: 'review',
    priority: 'High',
    dueDate: '2024-04-17',
    assignedAgents: [
      { id: 5, name: 'Growth Strategist', avatar: 'https://ui-avatars.com/api/?name=Growth+Strategist&background=6366f1&color=fff' },
      { id: 6, name: 'Product Advisor', avatar: 'https://ui-avatars.com/api/?name=Product+Advisor&background=6366f1&color=fff' }
    ]
  },
  {
    id: 4,
    title: 'Investor Match: RoboFleet',
    description: 'Match autonomous fleet management startup with potential Series A investors.',
    status: 'in_progress',
    priority: 'High',
    dueDate: '2024-04-18',
    assignedAgents: [
      { id: 7, name: 'Investor Matcher', avatar: 'https://ui-avatars.com/api/?name=Investor+Matcher&background=6366f1&color=fff' },
      { id: 8, name: 'Deal Analyzer', avatar: 'https://ui-avatars.com/api/?name=Deal+Analyzer&background=6366f1&color=fff' }
    ]
  },
  {
    id: 5,
    title: 'Demo Day Prep: CyberShield',
    description: 'Prepare cybersecurity startup for demo day presentation. Focus on traction metrics.',
    status: 'review',
    priority: 'Medium',
    dueDate: '2024-04-19',
    assignedAgents: [
      { id: 9, name: 'Pitch Advisor', avatar: 'https://ui-avatars.com/api/?name=Pitch+Advisor&background=6366f1&color=fff' }
    ]
  },
  {
    id: 6,
    title: 'Final Assessment: DataMesh',
    description: 'Complete final evaluation for data infrastructure startup before funding decision.',
    status: 'done',
    priority: 'High',
    dueDate: '2024-04-14',
    assignedAgents: [
      { id: 10, name: 'Financial Assessor', avatar: 'https://ui-avatars.com/api/?name=Financial+Assessor&background=6366f1&color=fff' },
      { id: 11, name: 'Technical Evaluator', avatar: 'https://ui-avatars.com/api/?name=Technical+Evaluator&background=6366f1&color=fff' }
    ]
  }
])

function getTasksByStatus(status) {
  return tasks.value.filter(task => task.status === status)
}

function createTask() {
  toast.info('Task creation coming soon!')
}

function editTask(task) {
  toast.info(`Editing task: ${task.title}`)
}
</script>
