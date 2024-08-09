<script setup>
import Comments from '../tickets/Comments.vue'
import Dropdown from '../dropdown/Dropdown.vue'
import { STATUSES } from '@/constants/statusConstants'

import { ref } from 'vue'

const props = defineProps({
  ticket: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

let showCommnet = ref(false)

function toggleComments() {
  this.showCommnet = !this.showCommnet
}
</script>

<template>
  <div class="ticket text-xs mt-5 border w-full rounded p-5">
    <div><span class="font-bold">Subject: </span>{{ ticket.subject }}</div>
    <div><span class="font-bold">Description: </span>{{ ticket.description }}</div>
    <div><span class="font-bold">Status: </span>{{ ticket.status }}</div>
    <div>
      <span class="font-bold">Update status: </span>
      <Dropdown v-model="ticket.status" :options="STATUSES" class="my-3" />
    </div>

    <div class="p-2 bordered border-white rounded">
      <div v-if="!ticket.comments.length" class="text-center text-xs text-white">
        No comments yet
      </div>
      <ul class="list-none" v-else>
        <li v-for="(comment, index) in ticket.comments" :key="index">
          {{ comment }}
        </li>
      </ul>
    </div>

    <button @click="toggleComments()" class="float-right">+ Add Comment</button>
    <div>
      <transition :duration="1" mode="in-out">
        <Comments v-if="showCommnet" :index="index" />
      </transition>
    </div>
  </div>
</template>
