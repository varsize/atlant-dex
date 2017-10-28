import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import misc from './modules/misc';
import localization from './modules/localization';
import trade from './modules/trade';
import loader from './modules/loader';
import modal from './modules/modal';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    misc,
    localization,
    trade,
    loader,
    modal,
  },
  plugins: [createPersistedState({
    paths: [
      'localization.lang',
    ],
  })],
});

export default store;
