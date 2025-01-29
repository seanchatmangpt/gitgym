<template>
  <div :class="[
    'p-4 rounded-lg max-w-3xl',
    isUser ? 'bg-pink-50 ml-auto' : 'bg-gray-50'
  ]">
    <div class="flex items-start gap-3">
      <div v-if="!isUser" class="flex-shrink-0">
        <div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
          <UserCircleIcon class="w-5 h-5 text-white" />
        </div>
      </div>
      <div class="flex-1 space-y-2">
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium text-gray-900">
            {{ isUser ? 'You' : 'Crew Assistant' }}
          </span>
        </div>
        <div class="text-sm text-gray-900">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserCircleIcon } from '@heroicons/vue/24/solid'

defineProps({
  isUser: {
    type: Boolean,
    default: false
  }
})
</script>