<template>
  <div class="news__header">
    <div class="news__time">
      {{translations.time[currentLang]}}
    </div>
    <div class="news__currency sub">
      <div class="news__currency-label">{{translations.currency[currentLang]}}</div>
      <ul class="news__filter sub__menu">
        <li
          v-for="(isActive, currency) in filters.currencies"
          class="news__filter-item sub__menu-item"
          :class="{'news__filter-item--active': isActive}"
          :key="currency"
          @click="toggleFilterItem({type: 'currencies', item: currency})"
        >
          <span>{{currency}}</span> - <span>{{translations[currency][currentLang]}}</span>
        </li>
      </ul>
    </div>
    <div class="news__name sub">
      <div class="news__name-label">{{translations.event[currentLang]}}</div>
      <ul class="news__filter sub__menu">
        <li
          v-for="(isActive, imp) in filters.importance"
          class="news__filter-item sub__menu-item"
          :class="{'news__filter-item--active': isActive}"
          :key="imp"
          @click="toggleFilterItem({type: 'importance', item: imp})"
        >
          <span>{{translations[imp][currentLang]}}</span>
        </li>
      </ul>
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
import translations from './../../translations.js';

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
    font-size: 14px;
    padding: 0 10px;
    background-color: #2f2f2f;
    color: #fff;
  }
  
  .news__header > div {
    height: 35px;
    line-height: 35px;
  }

  .news__currency {
    position: relative;
  }

  .news__currency-label {
    cursor: pointer;
  }

  .news__filter {
    position: absolute;
    top: 35px;
    left: 0;
    width: 200px;
    background-color: #2f2f2f;
    text-align: left;
    z-index: 9;
  }

  .news__filter-item {
    opacity: 0.5;
    padding: 10px;
    line-height: initial;
  }
  
  .news__filter-item:last-child {
    margin-bottom: 0;
  }
  
  .news__filter-item--active {
    opacity: 1.0;
  }

</style>
