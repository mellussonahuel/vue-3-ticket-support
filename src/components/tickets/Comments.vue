<script setup>
import { ref } from 'vue'
import { useTicketStore } from '../../state/tickets'
import Input from '../input/Input.vue'
import SaveButton from '../buttons/SaveButton.vue'

const props = defineProps({
  index: {
    type: Number,
    required: true
  }
})

const store = useTicketStore()

const comment = ref('')

const saveComment = () => {
  store.addComment(props.index, comment.value)
  comment.value = '' // Limpiar el campo después de guardar
}
</script>

<template>
  <div class="">
    <Input
      type="text"
      v-model="comment"
      class="text-black rounded my-3 p-1 w-full"
      placeholder="Subject"
    />
    <save-button @click="saveComment"> Save comment </save-button>
  </div>
</template>
