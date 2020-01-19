import Vue from 'vue'
import VueRouter from 'vue-router'
import GPStracking from '../views/GPStracking.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/tracking',
    name: 'tracking',
    component: GPStracking
  }
]

const gpsrouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default gpsrouter
