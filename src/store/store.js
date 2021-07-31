import Vue from 'vue';
import Vuex from 'vuex';
export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_MESSAGE = 'SET_MESSAGE';
export const RESET_MESSAGE = 'RESET_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';


//plugin
import createPersistedState from 'vuex-persistedstate';
import MensajeModel from '../models/mensaje';
Vue.use(Vuex);
export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    message: MensajeModel.BaseForm(),
    messages: [],
    country: {
      default: {
        name: 'Perú',
        code: 'PE',
        callingCode: '51',
      },
    },
  },
  mutations: {
    [SET_COUNTRY](state, payload) {
      state.country = payload;
    },
    [SET_MESSAGE](state, payload) {
      state.message = payload;
    },
    [SET_MESSAGES](state, payload) {
      state.messages = state.messages.push(payload);
    },
    [RESET_MESSAGE](state,) {
      state.message = MensajeModel.BaseForm();
    },
  },
});
