import * as Trade from 'services/api/trade';

export default {
  state: {
    pair: 'BTC_ATL',
    chart: {
      data: {},
      period: '1d',
    },
  },
  getters: {
    baseCurrency(state) {
      return state.pair.split('_')[0];
    },
    derivedCurrency(state) {
      return state.pair.split('_')[1];
    },
  },
  mutations: {
    setChartData(state, data) {
      state.chart.data = data;
    },
    setCurrency(state, currency) {
      state.pair = 'BTC_' + currency;
    },
  },
  actions: {
    loadChart({commit, state}) {
      Trade.getChart({
        period: state.period,
        pair: state.pair,
      }).then((res) => {
        commit('setChartData', res.data.result);
      });
    },
    changeCurrency({commit, dispatch}, currency) {
      commit('setCurrency', currency);
      dispatch('loadChart');
    },
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
