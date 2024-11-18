import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/characters', component: CharactersView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
