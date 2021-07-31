import '@babel/polyfill'// The Vue build version to load with the `import` command
import Vue from 'vue'
import { store } from "./store/store"; // importa los estados
import router from "./router"; // importa rutas
import VueAnalytics from 'vue-analytics';
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
import './plugins/vuetify'
import './plugins/vee-validate'

import App from './App.vue'
// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_BASE_ANALITICS_ID
});
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
