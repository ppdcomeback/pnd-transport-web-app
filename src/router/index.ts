import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GPStracking from '../views/GPStracking.vue'
import listjobrinter from '../components/printer/listjob-print.vue'

var bodyParer = require('body-parser')

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */'../views/About.vue')
  },
  {
    path: '/listjob',
    name: 'listjob',
    component: () => import(/* webpackChunkName: "listjob" */ '../views/Listjob.vue')
  },
  {
    path: '/tracking',
    name: 'tracking',
    component: GPStracking
  },
  {
    path: '/printlistjob',
    name: 'ptintjistjob',
    component: listjobrinter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
