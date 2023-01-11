import Empty from './pages/Empty.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  { path: '/', component: Empty },
  { path: '/playground', component: () => import('./pages/Playground.vue') },
  { path: '/quick-launcher', component: () => import('./pages/QuickLauncher.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
