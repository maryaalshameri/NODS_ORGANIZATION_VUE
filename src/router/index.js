import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/',name: 'Home',component: Home
  },
  { path: '/about', name: 'About', component: About },  
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/Contact', name: 'Contact', component: Contact },
  { path: '/Dashboard', name: 'Dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
