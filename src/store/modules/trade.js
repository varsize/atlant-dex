import * as Trade from 'services/api/trade';

export default {
  state: {
    period: '1d',
    pair: 'BTC_ATL',
    chartData: {},
  },
  getters: {
    getCurrency(state) {
      return state.pair.split('_')[1];
    },
  },
  mutations: {
    setChartData(state, chartData) {
      state.chartData = chartData;
    },
    setCurrency(state, currency) {
      state.pair = 'BTC_' + currency;
    },
  },
  actions: {
    loadChart({commit, state}) {
      const payload = {
        period: state.period,
        pair: state.pair,
      };
      console.log(payload);
      Trade.getChart(payload).then((res) => {
        commit('setChartData', res.data.result);
        console.log(state.chartData);
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
