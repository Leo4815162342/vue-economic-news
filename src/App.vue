<template>
  <div id="app">
    <Header />

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

  </div>
</template>

<script>

import { mapActions, mapState, mapGetters } from 'vuex';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  },
  methods: {
    ...mapActions(['fetchNews', 'setLanguage'])
  },
  computed: mapState({
    news: state => state.newsList,
    currentLang: state => state.currentLang
  }),
  created: function() {

    this.fetchNews();

  }
}
</script>

<style>

html {
  overflow-y: scroll;
}



body {
  margin: 0;
  padding: 0;
  background: #dfdfdf;
  overflow-x: hidden;
}



ul, li {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
