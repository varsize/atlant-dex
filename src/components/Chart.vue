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
  methods: {},
  mounted() {
    let data = [[1, 3, 10, 1, 5], [2, 6, 12, 1, 4]];

    function actualPrice() {
      let lastCandle = data[data.length - 1];
      return lastCandle[lastCandle.length - 1];
    }
    Highstock.stockChart('chart', {
      chart: {
        renderTo: 'chart',
        spacing: [50, 0, 0, 0],
        reflow: false, // Whether to reflow the chart to fit the width of the container div on resizing the window. DEFAUL 'true'
        backgroundColor: '#03354f',
        style: {
          fontFamily: 'Roboto',
          fontSize: '12px',
        },
        events: {
          load: function() { // set up the updating of the chart each second
              let series = this.series[0];
              setInterval(function() {
                  let t = (new Date()).getTime(); // current time
                  let x = Math.round(Math.random() * (100 - 1) + 1);
                  let y = x + Math.round(Math.random() * (10 - 1) + 1);
                  let z = y + Math.round(Math.random() * (10 - 1) + 1);
                  let q = z + Math.round(Math.random() * (10 - 1) + 1);
                  series.addPoint([t, x, y, z, q]);
              }, 1000);
          },
        },
      },
      credits: {
        enabled: false,
      },
      navigator: {
        enabled: false, // history panel
      },
      rangeSelector: {
        enabled: false, // tool for selecting ranges to display within the chart
      },
      scrollbar: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
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
        dateTimeLabelFormats: {
          day: '%d %b %Y',
        },
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
      yAxis: {
        allowDecimals: true,
        opposite: true,
        title: {
          text: '',
        },
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
        plotLines: [{ // Price line
          value: this.series,
          color: '#00ce7d',
          dashStyle: 'longdash',
          width: 2,
          zIndex: 5,
          labels: {
            text: actualPrice(),
            align: 'right',

            x: -10,
            y: -10,
            style: {
              color: 'white',
              fontSize: 20,
            },
          },
        }],
      },
      plotOptions: {
        candlestick: {
          upColor: '#00ce7d',
          upLineColor: '#00ce7d',
          color: '#e55541',
          lineColor: '#e55541',
          lineWidth: 2,
        },
      },
      plotSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M',
        }, {
            count: 5,
            type: 'minute',
            text: '5M',
        }, {
            type: 'all',
            text: 'All',
        }],
        inputEnabled: false,
        selected: 0,
      },
      legend: {
        enabled: false,
      },
      series: [{
          name: 'Stock',
          data: data,
          spacingRight: 500000,
          type: 'candlestick',
          zIndex: 2,
          pointPadding: 0.05,
        }],
      responsive: {},
    });
  },
};
</script>

<style lang='scss'>
.chart {
    height: 100%;
    width: 100%;
}
#chart {
    height: 100%;
    width: 100%;
}
</style>
