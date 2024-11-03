import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/program',
      name: 'program',
      component: () => import('../views/ProgramView.vue'),
    },
    {
      path: '/eLearn',
      name: 'eLearn',
      component: () => import('../views/ELearnView.vue'),
    },
    {
      path: '/getInvolved',
      name: 'getInvolved',
      component: () => import('../views/GetInvolvedView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
  ],
})

export default router
