<template>
  <div id="app">
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/list" icon="orders-o">列表</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view data-theme="light-theme" />
  </div>
</template>

<script lang="ts">
declare let THEMEARR: any
declare let THEMEFILES: any
import fs from 'fs'
export default {
  data() {
    return {
      active: 0,
    }
  },
  mounted() {
    console.log('ThemesArr', THEMEARR, 'THEMEFILES', THEMEFILES)
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'default')
  },
}
</script>

<style lang="scss">
#app {
  height: 100%;
  font-size: $font-size;
}
</style>