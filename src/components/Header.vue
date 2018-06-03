<template>
    <div class="header">
      <div class="header__inner">
        <div class="header__logo">
          <img src="./../assets/newspaper.svg" width="24" height="24">
          <h1>Economic News</h1>
        </div>
        <div class="header__menu">
          <div class="header__menu-item">Jun 5 - Jun 7</div>
          <div class="header__menu-item">English</div>
          <div class="header__menu-item">Updated: 12.12.2018 12:12</div>
        </div>
        
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    // msg: String
  },
  created() {
    
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
  margin: 0 10px;
  height: inherit;
  line-height: 50px;
}

.header__menu-item:last-child {
  margin-right: 0;
}

.header__menu-item:hover {
  color: #fff;
}
</style>
