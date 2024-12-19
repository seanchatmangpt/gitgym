import { ref, watch } from 'vue'
import { toast } from 'vue3-toastify'

export function useIntegrationCard(props, emit) {
  // Local state for toggling
  const localEnabled = ref(props.isEnabled)

  // Watch for external changes to the `isEnabled` prop
  watch(() => props.isEnabled, (newVal) => {
    localEnabled.value = newVal
  })

  // Toggle the integration state
  function toggleIntegration() {
    const newValue = !localEnabled.value
    localEnabled.value = newValue
    emit('toggle', newValue) // Emit event to parent
    toast.success(`${props.name} integration ${newValue ? 'enabled' : 'disabled'}`)
  }

  // Copy API Key
  function copyKey() {
    if (props.apiKey) {
      navigator.clipboard.writeText(props.apiKey)
      toast.success('API key copied to clipboard!')
    } else {
      toast.error('No API key available to copy!')
    }
  }

  // Mask the API Key for display
  function maskKey(key) {
    if (!key) return 'No API key available'
    return `${key.slice(0, 6)}...${key.slice(-4)}`
  }

  return {
    localEnabled,
    toggleIntegration,
    copyKey,
    maskKey
  }
}
