<template lang='pug'>
div.chart
  div.btn__periodSwitcher
    span.btn__periodBtn(id="lineChart") 12H
    span.btn__periodBtn(id="lineChart") 24H
    span.btn__periodBtn(id="lineChart") 3D
    span.btn__periodBtn.btn__periodBtn--active(id="lineChart") 1W
  div.btn__chartsSwitcher
    Icon.btn__chartsBtn(id="lineChart")
    Icon.btn__chartsBtn.btn__chartsBtn--active(id="candleChart", :class="")
  div#chart
</template>

<script>
import Highstock from 'highcharts/highstock';
import {mapState, mapActions} from 'vuex';
import {ticksToMilliseconds} from 'services/misc';
import Icon from './Icon';

export default {
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    ...mapState('trade', {
      startTicks: (state) => state.chart.data.startTicks,
      candleTicks: (state) => state.chart.data.candleTicks,
      candles: (state) => state.chart.data.candles,
    }),
  },
  methods: {
    ...mapActions('trade', {
      loadChart: 'loadChart',
    }),
    getCandleTime(index) {
      return ticksToMilliseconds(this.startTicks + (this.candleTicks * index));
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
          renderTo: 'chart',
          spacing: [50, 40, 10, 20],
          backgroundColor: '#03354f',
          reflow: false,
          style: {
            fontFamily: 'Roboto',
            fontSize: '12px',
          },
        },
        credits: {
          enabled: false,
        },
        navigator: {
          enabled: false,
        },
        rangeSelector: {
          enabled: false,
        },
        scrollbar: {
          enabled: false,
        },
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
        yAxis: [{
            allowDecimals: true,
            opposite: false,
            title: {
              text: '',
            },
            labels: {
              align: 'left',
              x: -20,
              style: {
                color: '#376691',
                fontSize: '12px',
              },
            },
            lineWidth: 0,
            gridLineWidth: 1,
          },
          {
            allowDecimals: true,
            opposite: true,
            title: {
              text: '',
            },
            labels: {
              align: 'right',
              x: 40,
              style: {
                color: '#376691',
                fontSize: '12px',
              },
            },
            offset: 0,
            lineWidth: 0,
            gridLineWidth: 2,
            gridLineColor: '#2b5072',
          },
        ],
        legend: {
          enabled: false,
        },
        // colors: ['#046fc4', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
        series: [{
            name: 'Price',
            data: prices,
            type: 'candlestick',
            upColor: '#00ce7d',
            upLineColor: '#00ce7d',
            color: '#e55541',
            lineColor: '#e55541',
            lineWidth: 2,
            yAxis: 1,
            zIndex: 2,
            pointPadding: 0.05,
          },
          {
            name: 'Volume',
            data: volumes,
            type: 'column',
            color: '#055580',
            yAxis: 0,
            zIndex: 1,
            pointPadding: 0.05,
          }],
      });
    },
  },
  watch: {
    candles() {
      this.$nextTick().then(() => {
        (this.chart === null) ? this.createChart(): this.chart.update({
          series: [{
              data: this.getCandlestickSeries(),
            },
            {
              data: this.getVolumeSeries(),
            },
          ],
        }, true, true);
      });
    },
  },
  created() {
    this.loadChart();
  },
  components: {
    Icon,
  },
};

</script>

<style lang='scss'>
.chart {
  position: relative;
  width: 100%;
  height: 100%;
}
.btn {
  &__chartsSwitcher {
    position: absolute;
    right: 10px;
    top: 20px;
    z-index: 4;
    display: flex;
  }

  &__periodSwitcher {
    position: absolute;
    left: 10px;
    top: 20px;
    z-index: 4;
    display: flex;
  }

  &__chartsBtn {
    width: 15px;
    height: 15px;
    fill: #586C86;
    margin: 0 10px;
    cursor: pointer;
    &--active {
      fill: #42B6F6;
    }
  }

  &__periodBtn {
    color: #586C86;
    margin: 0 4px;
    font-size: 14px;
    line-height: 15px;
    cursor: pointer;
    &--active {
      color: #42B6F6;
      font-weight: 500;
    }
  }
}
#chart {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
