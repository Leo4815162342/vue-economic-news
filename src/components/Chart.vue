<template>
  <GChart
    :settings="{'packages':['corechart'],'language': currentLang}"
    type="LineChart"
    :data="formattedChartData"
    :options="chartOptions"
  /> 
</template>

<script>


import { mapState } from 'vuex';
import { GChart } from 'vue-google-charts';

import translations from './../translations.js';

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
    }
  }),
  computed: {
    ...mapState([
      'currentLang'
    ]),
    chartLabels() {
      return ['time', 'actual', 'forecast'].map(item => {
        return translations[item][this.currentLang];
      })
    },
    formattedChartData() {
      return [this.chartLabels,...this.raw.map(item => {
        const { dateTs, actualVal, forecastVal} = item;
        return [new Date(dateTs), actualVal, forecastVal];
      }).sort((a,b) => a[0] - b[0])];
    }
  }
}
</script>

<style>

</style>
