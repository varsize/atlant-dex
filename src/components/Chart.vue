<template lang='pug'>
div.chart
  div#chart
</template>

<script>
import Highstock from 'highcharts/highstock';
import {mapState, mapActions} from 'vuex';
import {ticksToMilliseconds} from 'services/misc';

export default {
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    ...mapState('trade', {
      chartData: 'chartData',
      candles: (state) => state.chartData.candles,
    }),
  },
  methods: {
    ...mapActions('trade', {
      loadChart: 'loadChart',
    }),
    getCandleTime(index) {
      return ticksToMilliseconds(this.chartData.startTicks + (this.chartData.candleTicks * index));
    },
    getSeries(index) {
      return this.candles.map((item, i) => {
        return [
          this.getCandleTime(i),
          item[index],
        ];
      });
    },
    getPriceSeries() {
      return this.getSeries(0);
    },
    getVolumeSeries() {
      return this.getSeries(4);
    },
    getCandlestickSeries() {
      return this.candles.map((item, i) => {
        return [
          this.getCandleTime(i),
          item[0], item[1], item[2], item[3],
        ];
      });
    },
    createChart() {
      const prices = this.getCandlestickSeries();
      const volumes = this.getVolumeSeries();

      this.chart = Highstock.stockChart('chart', {
        chart: {
          spacing: [50, 0, 0, 0],
          reflow: false, // Whether to reflow the chart to fit the width of the container div on resizing the window. DEFAUL 'true'
          backgroundColor: '#03354f',
          style: {
            fontFamily: 'Roboto',
            fontSize: '12px',
          },

        },
        credits: {enabled: false},
        navigator: {enabled: false},
        rangeSelector: {enabled: false}, // tool for selecting ranges to display within the chart
        scrollbar: {enabled: false},
        title: '',
        tooltip: {
          crosshairs: {
            color: '#42b6f6',
            width: 1,
            dashStyle: 'LongDash',
          },
          shared: true,
        },
        xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: {day: '%d %b %Y'},
          lineColor: '#2b5072',
          labels: {
            align: 'center',
            y: 30,
            style: {
              color: '#376691',
              fontSize: '12px',
            },
          },
        },
        yAxis: [{
          allowDecimals: true,
          opposite: true,
          title: {text: ''},
          gridLineColor: '#2b5072',
          gridLineWidth: 2, // border height
          labels: {
            align: 'right',
            x: -10,
            y: -10,
            style: {
              color: '#376691',
              fontSize: 12,
            },
          },
          offset: 0,
          lineWidth: 0,
        },
        {
          allowDecimals: true,
          opposite: true,
          title: {text: ''},
          gridLineColor: '#2b5072',
          gridLineWidth: 2, // border height
          labels: {
            align: 'right',
            x: -10,
            y: -10,
            style: {
              color: '#376691',
              fontSize: 12,
            },
          },
          offset: 0,
          lineWidth: 0,
        }],
        plotOptions: {
           candlestick: {
              upColor: '#00ce7d',
              upLineColor: '#00ce7d',
              color: '#e55541',
              lineColor: '#e55541',
              lineWidth: 2,
            },
        },
        legend: {enabled: false},
        series: [{
          name: 'Price',
          data: prices,
          type: 'candlestick',
          zIndex: 2,
          pointPadding: 0.05,
        },
        {
          name: 'Volume',
          data: volumes,
          type: 'column',
          yAxis: 0,
          color: '#376691',
          zIndex: 1,
          pointPadding: 0.05,
        },
        {
          // type: 'column',
          yAxis: 0,

        }],
        responsive: {
        },
      });
    },
  },
  watch: {
    candles() {
      this.$nextTick().then(() => {
        (this.chart === null) ? this.createChart() : this.chart.update({
          series: [{
            data: this.getPriceSeries(),
          },
          {
            data: this.getVolumeSeries(),
          }],
        }, true, true);
      });
    },
  },
  created() {
    this.loadChart();
  },
};
</script>

<style lang='scss'>
  .chart {
    height: 100%;
    width: 100%;
  }
</style>
