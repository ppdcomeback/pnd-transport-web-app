import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/printerlistjob',
    name: 'ptinterjistjob',
    component: () => import('../components/printer/listjob-print.vue')
  }
]

const prouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default prouter
