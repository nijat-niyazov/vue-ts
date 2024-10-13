import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes,
})

export default router
