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
    quoteCurrency(state) {
      return state.pair.split('_')[1];
    },
    getPairName: (state, getters) => ({base = getters.baseCurrency, quote = getters.quoteCurrency}) => {
      return `${base}_${quote}`;
    },
  },
  mutations: {
    setChartData(state, data) {
      state.chart.data = data;
    },
    setPair(state, pair) {
      state.pair = pair;
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
    changeQuoteCurrency({commit, dispatch, getters}, currency) {
      const pair = getters.getPairName({
        quote: currency,
      });
      commit('setPair', pair);
      dispatch('loadChart');
    },
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
