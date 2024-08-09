<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  }
})
</script>

<template>
  <button class="bg-white text-gray-900 rounded px-2 py-1 m-auto text-sm">
    <slot></slot>
  </button>
</template>
0
