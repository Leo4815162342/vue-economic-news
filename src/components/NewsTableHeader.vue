<template>
  <div class="news__header">
    <div class="news__time">
      {{translations.time[currentLang]}}
    </div>
    <div class="news__currency">
      <div class="news__currency-label">{{translations.currency[currentLang]}}</div>
      <ul class="news__currency-list">
        <li
          v-for="(isActive, currency) in filters.currencies"
          :class="`news__currency-list-item ${isActive ? 'news__currency-list-item--active' : ''}`"
          :key="currency"
          @click="toggleFilterItem({type: 'currencies', item: currency})"
        >
          <span>{{currency}}</span> - <span>{{translations[currency][currentLang]}}</span>
        </li>
      </ul>
    </div>
    <div class="news__name">
      <div>{{translations.event[currentLang]}}</div>
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

import { mapState, mapActions } from 'vuex';
import translations from './../translations.js';

export default {
  name: 'NewsTableHeader',
  data() {
    return {
      translations,
      ui: {

      }
    }
  },
  computed: {
    ...mapState([
      'currentLang',
      'filters'
    ])
  },
  methods: {
    ...mapActions([
      'toggleFilterItem',
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
  
  .news__currency {
    position: relative;
  }

  .news__currency-label {
    text-decoration: underline;
    cursor: pointer;
  }

  .news__currency-list {
    position: absolute;
    top: 26px;
    left: 0;
    width: 200px;
    background-color: #2f2f2f;
    padding: 10px;
    text-align: left;
    z-index: 9;
  }

  .news__currency-list-item {
    margin-bottom: 10px;
  }
  
  .news__currency-list-item:last-child {
    margin-bottom: 0;
  }

</style>
