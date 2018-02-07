import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    userName: '',
  },
  mutations: {
    setUserName (state, payload) {
      state.userName = payload;
    }
  }
});

export default store;
