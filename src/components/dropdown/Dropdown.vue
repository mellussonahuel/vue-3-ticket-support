<script>
export default {
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array
    },
    emits: ['update:modelValue']
  }
}
</script>

<template>
  <div id="select">
    <select
      name="status-selector"
      id="status-selector"
      class="text-black rounded w-full p-1"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="(option, index) in options" :value="option" :key="index">{{ option }}</option>
    </select>
  </div>
</template>
