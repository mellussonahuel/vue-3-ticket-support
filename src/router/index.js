import { createRouter, createWebHistory } from 'vue-router'
import TicketsView from '../views/TicketsView.vue'
import TicketsListView from '../views/TicketsListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ticket-support',
      name: 'ticket-support',
      component: TicketsView
    },
    {
      path: '/ticket-backlog',
      name: 'ticket-backlog',
      component: TicketsListView
    }
  ]
})

export default router
