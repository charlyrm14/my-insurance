import { createRouter, createWebHistory } from 'vue-router'
import AppLayoutView from '../views/layout/AppLayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: AppLayoutView,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/home/HomeView.vue')
        }
      ]
    }
  ],
})

export default router
