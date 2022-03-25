import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/biens',
    name: 'biens',
    component: function () {
      return import('../views/Biens.vue')
    }
  },
  {
    path: '/biens/:id',
    name: 'afficherBien',
    component: function () {
      return import('../views/AfficherBien.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
