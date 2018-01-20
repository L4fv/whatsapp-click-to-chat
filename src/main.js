// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import { store } from "./store/store";
import App from "./App";
import router from "./router";
import VeeValidate from "vee-validate";
Vue.use(Vuetify, {
  theme: {
    primary: "#009688",
    secondary: "#37474f",
    accent: "#F50057",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});
Vue.use(VeeValidate);
Vue.use(Vuetify);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
