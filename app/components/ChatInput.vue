<template>
  <div class="border-t border-gray-200 px-4 py-3">
    <label for="prompt" class="sr-only">Your message</label>
    <div class="relative">
      <textarea
        id="prompt"
        v-model="message"
        rows="3"
        class="block w-full resize-none rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Describe what you are trying to accomplish and what kind of automation you want to build..."
        @keydown.enter.prevent="sendMessage"
      />
      <div class="absolute right-0 bottom-0 flex justify-end py-2 px-3">
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="sendMessage"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const message = ref('')
const emit = defineEmits(['send'])

function sendMessage() {
  if (!message.value.trim()) return
  emit('send', message.value)
  message.value = ''
}
</script>