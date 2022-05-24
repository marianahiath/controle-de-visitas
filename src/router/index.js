import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/historic',
    name: 'historic',
    // route level code-splitting
    // this generates a separate chunk (historic.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "historic" */ '../views/HistoricView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
