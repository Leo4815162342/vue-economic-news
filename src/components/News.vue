<template>
  <div class="news">

    <div class="news__day" v-for="({ dayName, list }, key) in news" :key="key">
      <h4 class="news__day-name">{{dayName}}</h4>
      <ul class="news__items">
        <li class="" v-for="{ EventName, CurrencyCode, formattedTime, Id } in list" :key="Id">
          <span>{{CurrencyCode}}</span>, <span>{{EventName}}</span>, <span>{{formattedTime}}</span>
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

</style>
