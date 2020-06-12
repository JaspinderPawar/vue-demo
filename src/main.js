import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VModal from 'vue-js-modal'
 


import routes from './routes'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.use(VModal)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})//.$mount('#app')
