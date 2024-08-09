import { defineStore } from 'pinia'

export const useTicketStore = defineStore('tickets', {
  state: () => ({
    tickets: []
  }),
  getters: {
    count: (state) => state.tickets.length
  },
  actions: {
    addTicket(ticket) {
      this.tickets.push(ticket)
    },
    addComment(index, comment) {
      const ticket = this.tickets[index]
      ticket.comments.push(comment)
    }
  }
})
