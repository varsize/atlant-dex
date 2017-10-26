import * as Trade from 'services/api/trade';

export default {
  state: {
    period: '1d',
    pair: 'BTC_ATL',
    chartData: {},
  },
  getters: {
  },
  mutations: {
    setChartData(state, chartData) {
      state.chartData = chartData;
    },
  },
  actions: {
    updateChart({commit, state}) {
      const payload = {
        period: state.period,
        pair: state.pair,
      };
      Trade.getChart(payload).then((res) => {
        commit('setChartData', res.data.result);
        console.log(state.chartData);
      });
    },
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
