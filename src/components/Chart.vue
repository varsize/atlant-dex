<template lang='pug'>
div.chart
  div#chart
</template>

<script>
import Highstock from 'highcharts/highstock';

export default {
  data() {
    return {
      chart: {},
    };
  },
  methods: {
  },
  mounted() {
    let data = [[1, 3, 10, 1, 5], [2, 6, 12, 1, 4]];
    Highstock.stockChart('chart', {
      chart: {
        spacing: [50, 0, 0, 0],
        reflow: true, // Whether to reflow the chart to fit the width of the container div on resizing the window. DEFAUL 'true'
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
        data: data,
        type: 'candlestick',
        zIndex: 2,
        pointPadding: 0.05,
      },
      {
        name: 'Volume',
        data: [[1, 0.5], [2, 2]],
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
};
</script>

<style lang='scss'>
  .chart {
    height: 100%;
    width: 100%;
  }
</style>
