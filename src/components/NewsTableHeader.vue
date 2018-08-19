<template>
  <div class="news__header">
    <div class="news__time">
      {{translations.time[currentLang]}}
    </div>
    <div class="news__currency">
      {{translations.currency[currentLang]}}
    </div>
    <div class="news__name">
      {{translations.event[currentLang]}}
    </div>
    <div class="news__previous">
      {{translations.previous[currentLang]}}
    </div>
    <div class="news__forecast">
      {{translations.forecast[currentLang]}}
    </div>
    <div class="news__actual">
      {{translations.actual[currentLang]}}
    </div>
  </div>
</template>

<script>


import { mapState } from 'vuex';
import translations from './../translations.js';

export default {
  name: 'NewsTableHeader',
  data() {
    return {
      translations
    }
  },
  computed: {
    ...mapState([
      'currentLang'
    ])
  }
}
</script>

<style>

  .news__header {
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 14px;
    background-color: #2f2f2f;
    color: #fff;
  }

</style>
