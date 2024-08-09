<script>
import { useTicketStore } from '../state/tickets'
import { mapActions } from 'pinia'
import Dropdown from '../components/dropdown/Dropdown.vue'
import FormError from '../components/validation/FormError.vue'
import SaveButton from '../components/buttons/SaveButton.vue'
import Input from '../components/input/Input.vue'
import { STATUSES } from '@/constants/statusConstants'

export default {
  components: {
    Dropdown,
    FormError,
    SaveButton,
    Input
  },
  data() {
    return {
      ticket: this.initTicketState(),
      errors: []
    }
  },
  computed: {
    creationStatuses() {
      return STATUSES.filter((status) => status != 'Show all')
    }
  },
  methods: {
    ...mapActions(useTicketStore, ['addTicket']),
    initTicketState() {
      return { subject: '', description: '', status: 'Open', comments: [] }
    },
    saveTicket() {
      if (this.validate()) {
        console.log('entra')
        this.addTicket(this.ticket)
        this.ticket = this.initTicketState()
      }
    },
    validate() {
      if (!this.ticket.subject.field || this.ticket.subject === null) {
        this.errors.push({
          field: 'subject',
          msg: 'Subject field is required'
        })
      }

      return !this.errors.length ? false : true
    }
  }
}
</script>

<template>
  <div class="tickets text-center">
    <h1 class="text-white my-4">Ticket Support System</h1>
    <div class="form flex flex-col items-center justify-center">
      <div class="relative w-full max-w-xs">
        <Input
          type="text"
          v-model="ticket.subject"
          name="subject"
          placeholder="Subject"
          class="w-full"
        />
        <form-error :errors="errors" field="subject" />
      </div>
      <div class="w-full max-w-xs">
        <Input
          type="text"
          v-model="ticket.description"
          name="description"
          placeholder="Description"
          class="w-full"
        />
        <form-error :errors="errors" field="description" />
      </div>
      <div class="w-full max-w-xs">
        <Dropdown v-model="ticket.status" :options="creationStatuses" class="my-3 w-full" />
      </div>
      <save-button @click="saveTicket" class="my-3 w-full max-w-xs"> Save ticket </save-button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
