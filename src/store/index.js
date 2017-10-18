import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import misc from './modules/misc';
import localization from './modules/localization';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    misc,
    localization,
  },
  plugins: [createPersistedState({
    paths: [
      'localization.lang',
    ],
  })],
});

export default store;
