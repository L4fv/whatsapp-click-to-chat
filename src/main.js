import '@babel/polyfill'// The Vue build version to load with the `import` command
import Vue from 'vue'
import { store } from "./store/store"; // importa los estados
import router from "./router"; // importa rutas

import './plugins/vuetify'
import './plugins/vee-validate'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
