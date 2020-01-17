import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GPStracking from '../views/GPStracking.vue'
import VueHtmlToPaper from 'vue-html-to-paper'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const VueHtmlToPaperoptions = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
  ]
}

Vue.use(VueHtmlToPaper, VueHtmlToPaperoptions)

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
