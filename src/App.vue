<template>
  <div id="app">
    
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="Detail">
     <router-view></router-view>       
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import url("assets/css/base.css");
</style>
