import i18n from 'i18n';

export default {
  state: {
    lang: i18n.locale,
  },
  getters: {
    getLangName: (state) => (lang) => {
      switch (lang) {
        case 'ru': return 'Русский';
        case 'en': return 'English';
        case 'cn': return '中文';
      }
    },
    langs(state) {
      return Object.keys(i18n.messages);
    },
    getMessage: (state) => (alias) => {
      return i18n.messages[state.lang][alias];
    },
  },
  mutations: {
    setLang(state, lang) {
      state.lang = lang;
      i18n.locale = lang;
    },
  },
  actions: {
    setLang({commit, rootGetters, state}, lang = state.lang) {
      commit('setLang', lang);
    },
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
