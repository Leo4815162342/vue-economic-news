<template>
  <div id="app">
    <Header />
    <News />
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import Header from './components/Header.vue';
import News from './components/News.vue';

export default {
  name: 'app',
  components: {
    Header,
    News
  },
  methods: {
    ...mapActions(['fetchNews'])
  },
  created: function() {

    this.fetchNews();

  }
}
</script>

<style>

html {
  overflow-y: scroll;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background: #b5b5b5;
  overflow-x: hidden;
  height: 100%;
}

ul, li {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  list-style-type: none;
}

h1, h2, h3, h4, h5 {
  margin: 0;
}

#app {
  height: inherit;
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
