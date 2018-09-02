<template>
  <div class="header__menu-item header__langs sub">
    <span>{{langs[currentLang]}}</span>
    <ul class="header__lang-list sub__menu">
      <li
        class="header__lang-item sub__menu-item"
        v-bind:key="code"
        v-for="(lang, code) in langs"
        @click="onLangClick(code)"
      >
        {{lang}}
      </li>
    </ul>
  </div>
</template>

<script>


import { mapActions, mapState } from 'vuex';

export default {
  name: 'Languages',
  data() {
    return {
      langs: {
        ru: 'Русский',
        en: 'English',
        es: 'Español',
        zh: '中文',
        pt: 'Português',
        ja: '日本語',
        de: 'Deutsch'
      }
    }
  },
  computed: {
    ...mapState([
      'currentLang'
    ])
  },
  methods: {
    ...mapActions([
      'setLanguage',
      'fetchNews'
    ]),
    onLangClick(code) {
      
      if (code === this.currentLang) {
        return;
      }
console.log('CHANGING LANG');
      this.setLanguage({lang: code});
      this.fetchNews();
    }
  }
}
</script>

<style>

.header__langs {
  position: relative;
  width: 65px;
  text-align: right;
  padding-right: 12px;
}

.header__langs:after {
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

.header__langs:hover:after {
  border-color: #fff transparent transparent transparent;
}

.header__lang-list {
  width: 120px;
  top:50px;
  line-height: 14px;
  z-index: 9;
}

.header__lang-item {
  padding: 10px;
  font-size: 14px;
  color: #ccc;
}

.header__lang-item:hover {
  color: #fff;
  background-color: #ea4c89;
}

</style>
