<template>
  <div id="app">
    <Header />
    <News />
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import Header from './components/header/Header.vue';
import News from './components/news/News.vue';

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
  min-height: 100%;
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

.sub {
  position: relative;
}

.sub:hover .sub__menu {
  display: block;
}

.sub__menu {
  display: none;
  position: absolute;
  text-align: left;
  background-color: #3b3b3bfa;
}


.checkbox {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #9d3c61;
  vertical-align: bottom;
  margin-right: 7px;
}

.checkbox--active {
  background-color: #ea4c89;
}

.checkbox--active:after {
  content: '';
  display: block;
  width: 3px;
  height: 6px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: translate3d(3px,1px,0) rotate(45deg);
}


</style>
