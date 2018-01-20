import Vue from "vue";
import Vuex from "vuex";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_MESSAGE = "SET_MESSAGE";
//plugin
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    message: {
      text: null
    },
    country: {
      default: {
        name: "Perú",
        code: "PE",
        allingCode: "51"
      }
    }
  },
  mutations: {
    [SET_COUNTRY](state, payload) {
      state.country = payload
    },
    [SET_MESSAGE](state, payload) {
      state.message = payload;
    }
  }
});
