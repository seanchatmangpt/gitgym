<template>
  <div class="max-w-7xl mx-auto">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Enterprise Features
        </h2>
        <p class="mt-1 text-sm text-gray-500">
          Advanced tools and capabilities for enterprise teams
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <EnterpriseFeatureCard
        v-for="feature in enterpriseFeatures"
        :key="feature.id"
        v-bind="feature"
        @click="navigateToFeature(feature)"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const enterpriseFeatures = useState('enterpriseFeatures', () => [
  {
    id: 'evaluator',
    title: 'Evaluator',
    description: 'Advanced evaluation tools for crew performance and quality metrics',
    icon: 'ChartBarSquareIcon'
  },
  {
    id: 'crew-studio',
    title: 'Crew Studio',
    description: 'Professional environment for designing and testing crew configurations',
    icon: 'BeakerIcon'
  },
  {
    id: 'auto-api',
    title: 'Auto API Creation',
    description: 'Automatically generate APIs from your crew configurations',
    icon: 'CodeBracketIcon'
  },
  {
    id: 'management',
    title: 'Management UI',
    description: 'Comprehensive interface for managing enterprise crews and resources',
    icon: 'Squares2X2Icon'
  },
  {
    id: 'testing',
    title: 'Crew Testing',
    description: 'Robust testing framework for crew validation and quality assurance',
    icon: 'BugAntIcon'
  },
  {
    id: 'chat-docs',
    title: 'Chat with Docs',
    description: 'Interactive documentation assistant powered by AI',
    icon: 'ChatBubbleLeftRightIcon'
  },
  {
    id: 'templates',
    title: 'Templates',
    description: 'Enterprise-grade templates for common use cases',
    icon: 'DocumentDuplicateIcon'
  },
  {
    id: 'deploy',
    title: 'Deploy CLI',
    description: 'Command-line tools for seamless deployment and management',
    icon: 'CommandLineIcon'
  },
  {
    id: 'quality',
    title: 'Quality Reporting',
    description: 'Detailed quality metrics and performance analytics',
    icon: 'DocumentChartBarIcon'
  },
  {
    id: 'training',
    title: 'Training UI',
    description: 'Interface for training and fine-tuning crew behaviors',
    icon: 'AcademicCapIcon'
  },
  {
    id: 'courses',
    title: 'CrewAI Courses',
    description: 'Educational resources for enterprise teams',
    icon: 'BookOpenIcon'
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Enterprise integrations with popular tools and services',
    icon: 'CubeIcon'
  },
  {
    id: 'auto-ui',
    title: 'Auto Generate UI',
    description: 'Automatically generate user interfaces for your crews',
    icon: 'WindowIcon'
  },
  {
    id: 'dashboards',
    title: 'Crew Dashboards',
    description: 'Customizable dashboards for monitoring crew performance',
    icon: 'PresentationChartLineIcon'
  },
  {
    id: 'auto-train',
    title: 'Auto Train',
    description: 'Automated training pipelines for crew optimization',
    icon: 'RocketLaunchIcon'
  }
])

const router = useRouter()

function navigateToFeature(feature) {
  router.push(`/enterprise/${feature.id}`)
}
</script>
