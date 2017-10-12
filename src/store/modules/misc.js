import {getScreenType} from 'services/misc';

export default {
  state: {
    screenType: '',
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
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
