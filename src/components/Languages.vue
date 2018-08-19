<template>
  <div class="header__menu-item header__menu-item--dropdown sub">
    <span>{{langs[currentLang]}}</span>
    <ul class="header__lang-list sub__menu">
      <li
        class="header__lang-item"
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

</style>
