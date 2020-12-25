import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import hue from './api/hue'
import base from './api/base'

Vue.config.productionTip = false

window.$hue = new hue(new base(fetch, process.env))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
