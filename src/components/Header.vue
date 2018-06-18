<template>
    <div class="header">
      <div class="header__inner">
        <div class="header__logo">
          <img src="./../assets/globe.svg" width="24" height="24">
          <h1>Economic News</h1>
        </div>
       
        <div class="header__menu">
          <Datepicker />
          <Languages />
          <div class="header__menu-item">
            <span>Update</span>
          </div>
        </div>
        
      </div>
    </div>
</template>

<script>

import Datepicker from './Datepicker.vue';
import Languages from './Languages.vue';

export default {
  name: 'Header',
  components: {
    Datepicker,
    Languages
  }
}
</script>

<style>
.header {
  height: 50px;
  background-color: #2f2f2ffa;
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
  font-weight: 800;
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
  margin: 0 15px;
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

@-webkit-keyframes rotating {
    from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
}

.rotating {
    -webkit-animation: rotating 0.6s linear infinite;
}

</style>
