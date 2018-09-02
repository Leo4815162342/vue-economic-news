<template>
    <div class="header" :class="{ 'header--loading': isFetching }">
      <div class="header__inner">
        <div class="header__logo">
          <img src="./../assets/flamingo.svg" width="24" height="24">
          <h1>Economic News</h1>
        </div>
       
        <div class="header__menu">
          <Datepicker />
          <Languages />
        </div>
        
      </div>
    </div>
</template>

<script>

import Languages from './Languages.vue';

import { mapState } from 'vuex';

export default {
  name: 'Header',
  components: {
    Datepicker: () => import('./Datepicker.vue'),
    // Datepicker,
    Languages
  },
    computed: {
    ...mapState([
      'isFetching',
    ])
  }
}
</script>

<style>

.header {
  position: relative;
  height: 50px;
  background-color: #2f2f2f;
  border-bottom: 3px solid #ea4c89;
}

.header:after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  height: 3px;
  width: 100%;
  will-change: transform;
  background-color: #fff;
  transform: scaleX(0);
  transform-origin: 0% 0%;
}

.header--loading:after {
  animation-duration: 1.5s;
  animation-name: loader-animations;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  height: inherit;
}

.header__logo {
  display: flex;
  align-items: center;
  color: #fff;
}

.header__logo h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  margin-left: 5px;
}

.header__menu {
  color: #a8a8a8;
  height: inherit;
  font-size: 14px;
}

.header__menu-item {
  position: relative;
  display: inline-block;
  margin: 0 10px;
  height: inherit;
  line-height: 50px;
  cursor: pointer;
}

.header__menu-item:last-child {
  margin-right: 0;
}

.header__menu-item:hover,
.flatpickr-input:hover,
.header__menu-item--selected {
  color: #fff;
}

@keyframes loader-animations {
    0% {
        transform: scaleX(0);
    }
    50% {
        transform: scaleX(1);
    }
    100% {
        transform: scaleX(0);
    }
}

</style>
