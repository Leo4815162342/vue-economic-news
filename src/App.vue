<template>
  <div id="app">
    <Header />


    <h1>{{currentLang}}</h1>
    <div class="list" v-if="news && news.length">
      
      <div class="list__item" v-for="{ EventName, CurrencyCode, ReleaseDate, Id } in news" :key="Id">
        <strong>{{EventName}}</strong>, <strong>{{CurrencyCode}}</strong>, <span>{{ReleaseDate}}</span>
      </div>

    </div>

  </div>
</template>

<script>

import { mapActions, mapState, mapGetters } from 'vuex';
import Header from './components/Header.vue';
import { DateTime } from 'luxon';


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
