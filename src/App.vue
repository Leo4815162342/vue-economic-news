<template>
  <div id="app">
    <Header />



    <div v-if="newsLoading">LOADING</div>
    <div v-else>FINISED LOADING</div>
    <div v-for="(lang, code) in langs">
      <div @click="fetchNews(code)">{{lang}}, {{code}}</div>
    </div>
    <div class="list" v-if="news.length">
      
      <div class="list__item" v-for="{ EventName, CurrencyCode, ReleaseDate, Id } in news" :key="Id">
        <strong>{{EventName}}</strong>, <strong>{{CurrencyCode}}</strong>, <span>{{ReleaseDate}}</span>
      </div>

    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

import proxiedFetch from './proxiedFetch';

// http://xkcd.com/info.0.json
// https://quotes.tickmill.com/livegraph_new/cache/small.php?cors=tm
const API_BASE_URL = 'https://www.mql5.com/ru/economic-calendar/widget/content';

const NEWS_API_URL = 'https://www.mql5.com/ru/economic-calendar/widget/content?date_mode=2&from=2018-05-04T00%3A00%3A00&to=2018-05-06T23%3A59%3A59';

const new_test = 'https://www.mql5.com/ru/economic-calendar/widget/content?date_mode=2&from=2017-04-29T00%3A00%3A00to=2017-04-30T00%3A00%3A00';

export default {
  name: 'app',
  components: {
    Header
  },
  data() {
    return  {
      langs: {
        ru: 'Русский',
        en: 'English',
        es: 'Español',
        zh: '中文',
        pt: 'Português',
        ja: '日本語',
        de: 'Deutsch'
      },
      news: [],
      newsLoading: true
    }
  },
  methods: {
    async fetchNews(lang = 'en', dateFrom = '2017-04-20', dateTo = '2017-04-21') {
      
      this.$emit('startFetching');

      const url = `https://www.mql5.com/${lang}/economic-calendar/widget/content?date_mode=2&from=${dateFrom}T00:00:00&to=${dateTo}T23:59:59`;

      const res = await proxiedFetch(encodeURI(url));
      const textData = await res.text();
      const jsonData = JSON.parse(textData.replace(/<!--[\s\S]*?-->/g, ""));

      this.news = jsonData;

      this.$emit('finishFetching');

    },
    bindHandlers() {

      this.$on('startFetching',  _ => this.newsLoading = true);
      this.$on('finishFetching',  _ => this.newsLoading = false);

    }
  },
  created: async function() {

    this.bindHandlers();
    // this.fetchNews('ja');

    // setTimeout(() => {
    //   this.fetchNews('de');
    // }, 5000)

  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  background: #dfdfdf;
}

#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
