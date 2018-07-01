<template>
  <div class="news">

    <div class="news__day" v-for="({ dayName, list }, key) in news" :key="key">
      <h4 class="news__day-name">{{dayName}}</h4>
      <ul class="news__items">
        <li class="news__item" v-for="{ EventName, CurrencyCode, formattedTime, PreviousValue, ForecastValue, ActualValue, ImpactDirection, Id } in list" :key="Id">
          <div class="news__time">
            {{formattedTime}}
          </div>
          <div class="news__currency">
            {{CurrencyCode}}
          </div>
          <div class="news__name">
            {{EventName}}
          </div>
          <div class="news__previous">
            {{PreviousValue}}
          </div>
          <div class="news__forecast">
            {{ForecastValue}}
          </div>
          <div class="news__actual" :class="`news__actual--${ImpactDirection}`">
            <strong>{{ActualValue}}</strong>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'News',
  computed: mapState({
    news: state => state.newsList,
  })
}

</script>

<style>
  
  .news {
    max-width: 960px;
    margin: 25px auto 100px auto;
    background-color: #fff;
  }
  
  .news__day-name {
    background-color: #999;
    color: #fff;
    padding: 10px;
    font-weight: normal;
    text-align: center;
  }

  .news__item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ededed;
  }

  .news__item:nth-child(even) {
    background-color: #f3f3f3;
  }
  
  .news__actual--1 {
    color: green;
  }
  
  .news__actual--2 {
    color: red;
  }

</style>
