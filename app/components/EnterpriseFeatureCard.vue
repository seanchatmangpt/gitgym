<template>
  <div
    class="relative group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
    @click="$emit('click')"
  >
    <div class="flex items-center space-x-3">
      <div class="flex-shrink-0">
        <component
          :is="resolvedIcon"
          class="h-6 w-6 text-indigo-600"
          aria-hidden="true"
        />
      </div>
      <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
    </div>
    
    <p class="mt-4 text-sm text-gray-500">{{ description }}</p>
    
    <div class="mt-4 flex items-center text-sm text-indigo-600 group-hover:text-indigo-500">
      <span>Learn more</span>
      <ChevronRightIcon class="ml-1 h-4 w-4" />
    </div>
  </div>
</template>

<script setup>
import {
  ChartBarSquareIcon,
  BeakerIcon,
  CodeBracketIcon,
  Squares2X2Icon,
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  DocumentDuplicateIcon,
  CommandLineIcon,
  DocumentChartBarIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CubeIcon,
  WindowIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const icons = {
  ChartBarSquareIcon,
  BeakerIcon,
  CodeBracketIcon,
  Squares2X2Icon,
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  DocumentDuplicateIcon,
  CommandLineIcon,
  DocumentChartBarIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CubeIcon,
  WindowIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon
}

const resolvedIcon = computed(() => icons[props.icon])
</script>