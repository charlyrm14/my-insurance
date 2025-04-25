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
        },
        {
          path: 'policy/:id',
          name: 'policy-detail',
          component: () => import('../views/policy/PolicyView.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('../views/search/SearchView.vue')
        },
        {
          path: 'chat-ia',
          name: 'chat-ia',
          component: () => import('../views/chat/IAChatView.vue')
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/shop/ShopView.vue')
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/settings/SettingsView.vue')
        },
      ]
    }
  ],
})

export default router
