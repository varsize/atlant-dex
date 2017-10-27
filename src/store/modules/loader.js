// BUTTON loader
export default {
  state: {
    loaders: [],
  },
  getters: {
    isLoading: (state) => (name) => {
      return state.loaders.includes(name);
    },
  },
  mutations: {
    showLoader(state, name) {
      state.loaders.push(name);
    },
    hideLoader(state, name) {
      state.loaders = state.loaders.filter((item) => item !== name);
    },
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
