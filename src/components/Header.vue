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
.header__menu-item--datepicker:hover,
.header__menu-item--selected {
  color: #fff;
}

.header__menu-item--dropdown {
  position: relative;
  padding-right: 12px;
}

.header__menu-item--dropdown:after {
  position: absolute;
  content: '';
  top: 50%;
  margin-top: -1px;
  right: 0px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 4px 0 4px;
  border-color: #999 transparent transparent transparent;
}

.header__menu-item--dropdown:hover:after {
  border-color: #fff transparent transparent transparent;
}

.header__lang-list {
  background-color: #2f2f2ffa;
  line-height: 14px;
  z-index: 9;
}

.header__lang-item {
  min-width: 100px;
  padding: 10px 10px;
  font-size: 14px;
  color: #ccc;
}

.header__lang-item:hover {
  color: #fff;
  background-color: #ea4c89;
}

.sub {
  position: relative;
  width: 65px;
  text-align: right;
}

.sub:hover .sub__menu {
  display: block;
}

.sub__menu {
  display: none;
  position: absolute;
  top:50px;
  /*left: -10px;*/
  background-color: #3b3b3bfa;
  text-align: left;
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
