import { createRouter, createWebHistory } from 'vue-router'
import CalificacionesView from '../views/CalificacionesView.vue'
import RegistroView from '../views/RegistroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'calificaciones',
      component: CalificacionesView
    },
    {
      path: '/registro',
      name: 'registro',
      component: RegistroView
    }
  ]
})

export default router