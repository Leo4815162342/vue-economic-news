<template>
  <div class="header__menu-item header__menu-item--dropdown sub">
    <span>{{langs[currentLang]}}</span>
    <ul class="header__lang-list sub__menu">
      <li
        class="header__lang-item"
        v-bind:key="code"
        v-for="(lang, code) in langs"
        @click="setLanguage({lang: code})"
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
  computed: {
    ...mapState([
      'langs',
      'currentLang'
    ])
  },
  methods: {
    ...mapActions([
      'setLanguage'
    ])
  }
}
</script>

<style>

</style>
