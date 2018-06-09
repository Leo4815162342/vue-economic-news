<template>
    <div class="header">
      <div class="header__inner">
        <div class="header__logo">
          <img src="./../assets/globe.svg" width="24" height="24">
          <h1>Economic News</h1>
        </div>
       
        <div class="header__menu">
          <div class="header__menu-item header__menu-item--dropdown">
            <flat-pickr
              v-model="date"
              :config="flatPickrConfig"
              @on-change="onDateSelect"
            >
            </flat-pickr>
          </div>
          <div class="header__menu-item header__menu-item--dropdown sub">
            <span>{{langs.list[langs.selected]}}</span>
            <ul class="header__lang-list sub__menu">
              <li class="header__lang-item" v-bind:key="code" v-for="(lang, code) in langs.list">
                {{lang}}
              </li>
            </ul>  
          </div>
          <div class="header__menu-item">Updated: 12.12.2018 12:12</div>
        </div>
        
      </div>
    </div>
</template>

<script>

// import Datepicker from 'vuejs-datepicker';
// import datepicker from 'vue-date';
import flatPickr from 'vue-flatpickr-component';
import './datepicker.css';

const flatPickrConfig = {
  mode: 'range',
  altInput: true,
  altFormat: 'M j',
  altInputClass: 'header__menu-item--datepicker',
  static: true
}

export default {
  name: 'Header',
  props: {
    langs: Object
  },
  components: {
    flatPickr
  },
  data() {
    return {
      date: ['2018-05-07', '2018-05-11'],
      flatPickrConfig
    }
  },
  methods: {
    onDateSelect(data) {
      console.log('Date selected', data);
    }
  },
  created() {
    // console.log(Datepicker);
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

.header__menu-item--datepicker {
  display: inline-block;
  width:130px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: right;
  color: #999;
  border:none;
  padding: 0;
  background-image:none;
  background-color:transparent;
  box-shadow: none;
  box-sizing: border-box;
  cursor: pointer;
}



.header__menu-item--dropdown {
  position: relative;
  padding-right: 6px;
}

.header__menu-item--dropdown:after {
  position: absolute;
  content: '';
  top: 50%;
  margin-top: -1px;
  right: -6px;
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
}

.sub:hover .sub__menu {
  display: block;
}

.sub__menu {
  display: none;
  position: absolute;
  top:50px;
  left: -10px;
  background-color: #3b3b3bfa;
}

</style>
