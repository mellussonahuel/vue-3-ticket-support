<script setup>
import { useTicketStore } from '../state/tickets'
import Dropdown from '../components/dropdown/Dropdown.vue'
import { STATUSES } from '@/constants/statusConstants'
import Ticket from '@/components/tickets/Ticket.vue'
import { ref, computed } from 'vue'

const store = useTicketStore()
const filter = ref('Show all')

const filteredTickets = computed(() => {
  return filter.value === 'Show all'
    ? store.tickets
    : store.tickets.filter((ticket) => ticket.status === filter.value)
})
</script>

<template>
  <div class="tickets">
    <div v-if="!store.tickets.length" class="flex justify-center mt-5">
      <div>No tickes yet</div>
    </div>
    <div v-else class="mt-5 flex justify-between">
      <ul class="list-none m-auto w-2/5">
        <li v-for="(ticket, index) in filteredTickets" :key="index">
          <Ticket :ticket="ticket" :index="index" />
        </li>
      </ul>
      <Dropdown v-model="filter" :options="STATUSES" class="w-2/5 mt-5" />
    </div>
  </div>
</template>
