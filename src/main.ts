import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

var mysql = require('mysql')
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pnd-web-serv'
})
con.connect(function (err: any) {
  if (err) throw err
  console.log('Connected Success!')
})
