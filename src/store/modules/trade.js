import * as Trade from 'services/api/trade';

export default {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getTradeData() {
      const payload = {
        period: '1d',
        pair: 'BTC_ATL',
      };
      Trade.getChart(payload).then((res) => {
        console.log(res);
      });
    },
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
