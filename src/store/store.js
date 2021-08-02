import Vue from 'vue';
import Vuex from 'vuex';
export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_MESSAGE = 'SET_MESSAGE';
export const RESET_MESSAGE = 'RESET_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';
export const CLEAN_ITEM_MESSAGES = 'CLEAN_ITEM_MESSAGES';


//plugin
import createPersistedState from 'vuex-persistedstate';
import MensajeModel from '../models/mensaje';
Vue.use(Vuex);
export const store = new Vuex.Store({
  plugins: [createPersistedState({key: 'V0001_1.1'})],
  state: {
    message: MensajeModel.BaseForm(),
    messages: [{
      text:"hello",
      id:Date.now(),
      status: true
    }],
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
      const item = [{
        text: payload,
        id: Date.now()
      }]
      state.messages =       state.messages.concat(item) 
    },
    [CLEAN_ITEM_MESSAGES](state, payload) {
      const index = state.messages.findIndex(x=>x.id ==payload.id)
       state.messages.splice(index,1)
    },
    [RESET_MESSAGE](state,) {
      state.message = MensajeModel.BaseForm();
    },
  },
});
