<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  errors: {
    type: Array,
    required: true
  },
  field: {
    type: String,
    required: true
  }
})

const error = ref(null)

const getError = (field) => {
  const error = props.errors.find((error) => error.field === field)
  return error ? error.msg : null
}

watch(
  () => [props.errors, props.field],
  () => {
    error.value = getError(props.field)
  },
  { immediate: true }
)
</script>
<template>
  <transition>
    <div v-if="error" id="error" class="text-red-600 text-xs font-bold absolute -bottom-1">
      {{ error }}
    </div>
  </transition>
</template>

<style></style>
