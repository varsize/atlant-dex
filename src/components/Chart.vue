<template lang='pug'>
.chart
  canvas#myChart
</template>

<script>
import Chart from 'chart.js';

export default {
  data() {
    return {
      myChart: {},
    };
  },
  mounted() {
    let ctx = document.getElementById('myChart');
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
        }],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  },
};
</script>

<style lang='scss'>
.chart {
  width: 100%;
},
#myChart {
  width: 100%;
}
</style>
