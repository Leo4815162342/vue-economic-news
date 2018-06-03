<template>
    <div class="header">
      <div class="header__inner">
        <div class="header__logo">
          <img src="./../assets/newspaper.svg" width="24" height="24">
          <h1>Economic News</h1>
        </div>
        <div class="header__menu">
          <div class="header__menu-item header__menu-item--dropdown">Jun 5 - Jun 7</div>
          <div class="header__menu-item header__menu-item--dropdown sub">
            <span>{{langs.list[langs.selected]}}</span>
            <ul class="header__lang-list sub__menu">
              <li class="header__lang-item" v-for="(lang, code) in langs.list">
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
export default {
  name: 'Header',
  props: {
    langs: Object
  },
  created() {
    console.log(this.langs);
  }
}
</script>

<style scoped>
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
  font-weight: 400;
  color: #fff;
  margin-left: 5px;
}

.header__menu {
  color: #a8a8a8;
  height: inherit;
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

.header__menu-item:hover {
  color: #fff;
}

.header__menu-item--dropdown {
  position: relative;
  padding-right: 6px;
}

.header__menu-item--dropdown:after {
  position: absolute;
  content: '';
  top: 50%;
  margin-top: -3px;
  right: -12px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
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
  color: #999;
}

.header__lang-item:hover {
  color: #fff;
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
}

</style>
