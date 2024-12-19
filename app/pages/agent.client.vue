<script setup>
import {ref, onMounted} from 'vue';
import {useFetch} from '#app';
import {faker} from '@faker-js/faker';
import {generateMockAgent} from "~/mock-agent.js";

const agents = ref([]);
const newAgent = ref({
  name: '',
  role: '',
  description: '',
  iconType: '',
  skills: '',
  isActive: false,
});

// Toggle dark mode
const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

const isEditing = ref(false);
const selectedAgent = ref(null);

// Pre-populate the form with fake data
const generateFakeData = () => {
  newAgent.value = generateMockAgent();
};

// Fetch all agents
const fetchAgents = async () => {
  const {data} = await useFetch('/api/agents');
  console.log('fetchAgents', data);
  agents.value = data.value;
};

// Create a new agent
const createAgent = async () => {
  await useFetch('/api/agents/create', {
    method: 'POST',
    body: {
      ...newAgent.value,
      skills: newAgent.value.skills.split(',').map((s) => s.trim()),
    },
  });
  resetForm();
  fetchAgents();
};

// Update an agent
const updateAgent = async () => {
  if (selectedAgent.value) {
    await useFetch(`/api/agents/${selectedAgent.value.id}/update`, {
      method: 'PUT',
      body: {
        ...newAgent.value,
        skills: newAgent.value.skills.split(',').map((s) => s.trim()),
      },
    });
    resetForm();
    fetchAgents();
  }
};

// Delete an agent
const deleteAgent = async (id) => {
  await useFetch(`/api/agents/${id}/delete`, {
    method: 'DELETE',
  });
  fetchAgents();
};

// Handle editing an agent
const editAgent = (agent) => {
  isEditing.value = true;
  selectedAgent.value = agent;
  newAgent.value = {...agent, skills: agent.skills.join(', ')};
};

// Reset form and state
const resetForm = () => {
  newAgent.value = {
    name: '',
    role: '',
    description: '',
    iconType: '',
    skills: '',
    isActive: false,
  };
  isEditing.value = false;
  selectedAgent.value = null;
};

const columns = [{
  key: 'name',
  label: 'Name'
}, {
  key: 'role',
  label: 'Role'
}, {
  key: 'description',
  label: 'Description'
}]

const items = row => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => editAgent(row.id)
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]

onMounted(fetchAgents);
</script>

<template>
  <div class="container mx-auto py-10 px-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg mb-6">

      <UTable :rows="agents" :columns="columns" />
        </div>

    <!-- Agent Form -->
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
        {{ isEditing ? 'Edit Agent' : 'Add New Agent' }}
      </h2>
      <form @submit.prevent="isEditing ? updateAgent() : createAgent()" class="space-y-4">
        <div v-for="field in ['name', 'role', 'description', 'iconType', 'skills']" :key="field">
          <label
            :for="field"
            class="block font-medium mb-1 text-gray-700 dark:text-gray-200 capitalize"
            >{{ field }}</label
          >
          <UInput
            v-model="newAgent[field]"
            :id="field"
            :type="field === 'description' ? 'textarea' : 'text'"
          />
        </div>
        <div>
          <label class="inline-flex items-center text-gray-700 dark:text-gray-200">
            <UCheckbox
              v-model="newAgent.isActive"
            />
            <span class="ml-2">Is Active</span>
          </label>
        </div>
        <div class="flex space-x-4">
          <UButton
            type="submit"
          >
            {{ isEditing ? 'Update' : 'Create' }}
          </UButton>
          <UButton
            type="button"
            @click="generateFakeData"
          >
            Generate Fake Data
          </UButton>
          <UButton
            type="button"
            @click="resetForm"
          >
            Cancel
          </UButton>
        </div>
      </form>
    </div>
  </div>
</template>
