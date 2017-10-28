import * as Trade from 'services/api/trade';

export default {
  state: {
    pair: 'BTC_ATL',
    limit: 23,
    chart: {
      data: {},
      period: '1d',
    },
    trades: [],
    book: {
      bids: [],
      asks: [],
    },
    ohlc: {
      close: 0,
      high: 0,
      low: 0,
      change: 0,
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
    setTradeHistory(state, trades) {
      state.trades = trades;
    },
    setBook(state, data) {
      state.book.asks = data.asks;
      state.book.bids = data.bids;
    },
    setOHLC(state, data) {
      state.ohlc.high = data.high;
      state.ohlc.low = data.low;
      state.ohlc.close = data.last;
      state.ohlc.change = data.change;
    },
    addNewCandle(state, data) {
      const open = data[0];
      const high = data[1];
      const low = data[2];
      const close = data[3];
      const volume = data[4];
      if (data[5]) {
        state.chart.data.candles[state.chart.data.candles.length-1] = [open, high, low, close, volume]; // set last element
        state.chart.data.candles.push([close, close, close, close, 0]); // add new empty element
        state.chart.data.candles.splice(0, 1); // remove first element of array
      } else {
        let oldArray = state.chart.data.candles;
        oldArray.splice(oldArray.length-1, 1);
        state.chart.data.candles = [
          ...oldArray,
          [open, high, low, close, volume],
        ];
        console.log('last:', state.chart.data.candles[state.chart.data.candles.length-1]);
      }
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
    loadDesktop({commit, state}) {
      Trade.getDesktop({
        limit: state.limit,
        pair: state.pair,
      }).then((res) => {
        commit('setTradeHistory', res.data.result.trades);
        commit('setBook', res.data.result);
        commit('setOHLC', res.data.result);
      });
    },
    changeQuoteCurrency({commit, dispatch, getters}, currency) {
      const pair = getters.getPairName({
        quote: currency,
      });
      commit('setPair', pair);
      dispatch('loadChart');
      dispatch('loadDesktop');
    },
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
