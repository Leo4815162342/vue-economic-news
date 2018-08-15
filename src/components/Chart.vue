<template>
  <GChart
    type="LineChart"
    :data="formattedChartData"
    :options="chartOptions"
  /> 
</template>

<script>

import { GChart } from 'vue-google-charts';

export default {
  name: 'Chart',
  components: {
    GChart
  },
  props: {
    raw: Array
  },
  data: () => ({
    chartOptions: {
      legend: 'none',
      focusTarget: 'category',
      chartArea:{width: '100%', top: 20, left: 40, right: 25, bottom: 50 },
      hAxis: {
        format: 'y'
      }
    }
  }),
  computed: {
    formattedChartData() {
      return [['Time', 'Actual', 'Forecast'],...this.raw.map(item => {
        const { dateTs, actualVal, forecastVal} = item;
        return [new Date(dateTs), actualVal, forecastVal];
      }).sort((a,b) => a[0] - b[0])];
    }
  },
  // methods: {

  // }
}
</script>

<style>

</style>
