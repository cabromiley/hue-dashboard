import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Hue from './plugins/Hue'
import Api from './plugins/Api'
import AuthMiddleware from './router/middleware/auth'

Vue.config.productionTip = false

Vue.use(Hue, {
  env: {
    userToken: process.env.VUE_APP_HUE_USER_TOKEN,
    host: process.env.VUE_APP_HUE_HOST
  }
})

Vue.use(Api, {
  host: process.env.VUE_APP_API_BASE
})

AuthMiddleware(router, store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
