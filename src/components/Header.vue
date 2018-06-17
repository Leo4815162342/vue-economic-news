<template>
    <div class="header">
      <div class="header__inner">
        <div class="header__logo">
          <img src="./../assets/globe.svg" width="24" height="24">
          <h1>Economic News</h1>
        </div>
       
        <div class="header__menu">
          <Datepicker />
          <div class="header__menu-item header__menu-item--dropdown sub">
            <span>{{langs[currentLang]}}</span>
            <ul class="header__lang-list sub__menu">
              <li
                class="header__lang-item"
                v-bind:key="code"
                v-for="(lang, code) in langs"
                @click="onLangSelect(code)"
              >
                {{lang}}
              </li>
            </ul>  
          </div>
          <div class="header__menu-item">
            <span>Update</span>
          </div>
        </div>
        
      </div>
    </div>
</template>

<script>

import Datepicker from './Datepicker.vue';

import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    Datepicker
  },
  data() {
    return {
      date: null,
      datePickerConfig: {
        mode: 'range',
        altInput: true,
        altFormat: 'M j',
        altInputClass: 'header__menu-item--datepicker',
        static: true,
        locale: null
      }
      
    }
  },
  computed: {
    ...mapState([
      'langs',
      'currentLang'
    ])
  },
  methods: {
    ...mapActions(['setLanguage']),
    onLangSelect(lang) {
      this.setLanguage({lang});
    }
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
