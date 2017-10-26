<template lang='pug'>
div.chart
  div#chart
  button(@click='getData') Attempt new data
</template>

<script>
import Highstock from 'highcharts/highstock';
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      chart: {},
    };
  },
  methods: {
    ...mapActions('trade', {
      getData: 'getTradeData',
    }),
  },
  mounted() {
    Highstock.stockChart('chart', {
      chart: {
        height: '100%',
        spacing: [20, 40, 0, 20],
        reflow: false,
      },
      credits: {enabled: false},
      navigator: {enabled: false},
      rangeSelector: {enabled: false},
      scrollbar: {enabled: false},
      title: '',
      tooltip: {
        crosshairs: {
          color: 'green',
          dashStyle: 'solid',
        },
        shared: true,
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {day: '%d %b %Y'},
      },
      yAxis: [
        {
          allowDecimals: true,
          opposite: false,
          title: {text: ''},
          labels: {align: 'left'},
          lineWidth: 0,
          gridLineWidth: 1,
        },
        {
          allowDecimals: true,
          opposite: true,
          title: {text: ''},
          labels: {
            align: 'right',
            x: 30,
          },
          offset: 0,
          lineWidth: 0,
          gridLineWidth: 1,
        },
      ],
      legend: {enabled: false},
      colors: ['#046fc4', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
      series: [{
        name: 'Price',
        data: [[1, 3, 10, 1, 5], [2, 6, 12, 1, 4]],
        type: 'candlestick',
        yAxis: 1,
        zIndex: 2,
        pointPadding: 0.05,
      },
      {
        name: 'Volume',
        data: [[1, 0.5], [2, 2]],
        type: 'column',
        yAxis: 0,
        zIndex: 1,
        pointPadding: 0.05,
      }],
      responsive: {
      },
    });
  },
};
</script>

<style lang='scss'>
  .chart {
    height: 100%;
    width: 100%;
  }
</style>
