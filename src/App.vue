<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">首页</router-link> |
      <router-link to="/classification">分类</router-link> |
      <router-link to="/findings">发现</router-link> |
      <router-link to="/mine">我的</router-link> -->
    <!-- </div> -->
    <router-view />
    <FooterBar v-if="$route.meta.footerBar"></FooterBar>
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar";
export default {
  components: {
    FooterBar
  }
};
</script>
<style lang="scss">
html,
body {
  // position: relative;
  height: 100%;
  background-color: #f0ebe6;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
