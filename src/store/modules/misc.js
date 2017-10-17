import {getScreenType} from 'services/misc';

export default {
  state: {
    screenType: '',
    showSidebar: true,
  },
  getters: {
    isMobile(state) {
      return state.screenType === 'mobile';
    },
  },
  mutations: {
    updateScreenType(state) {
      state.screenType = getScreenType();
    },
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
