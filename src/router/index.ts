import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DemoViewVue from '@/views/DemoView.vue'
import FormView from "@/views/FormView/FormView.vue"
import CustomRouter from "@/views/CustomRouter/CustomRouter.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoViewVue
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
    {
      path: '/custom-router',
      name: 'custom-router',
      component: CustomRouter
    },
  ]
})

export default router
