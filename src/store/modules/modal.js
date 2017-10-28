export default {
  state: {
    name: '',
  },
  mutations: {
    open(state, name, data) {
      state.name = name;
      state.data = data;
    },
    close(state) {
      state.name = '';
      state.data = {};
    },
  },
  getters: {
    isOpened: (state) => (name) => {
      return (name) ? (state.name === name) : (state.name !== '');
    },
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
