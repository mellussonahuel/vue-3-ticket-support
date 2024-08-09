<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  placeholder: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  modelValue: {}
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :type="props.type"
    :name="props.name"
    class="text-black rounded my-3 p-1 w-full"
    :value="props.modelValue"
    :placeholder="placeholder"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
