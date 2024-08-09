<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    },
    tooltip: {
      type: String
    }
  }
}
</script>

<template>
  <div id="badge" class="badge rounded-full w-4 h-4 flex items-center justify-center">
    {{ count }}
  </div>
</template>

<style scoped>
.badge {
  font-size: 0.5rem;
  background-color: hsla(160, 100%, 37%, 1);
}
</style>
