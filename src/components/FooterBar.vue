<template>
  <div class="footer-bar">
    <router-link to="/home" class="home router-link"><i></i>首页</router-link>
    <router-link to="/classification" class="classification router-link"
      ><i></i>分类</router-link
    >
    <router-link to="/findings" class="findings router-link"
      ><i></i>发现</router-link
    >
    <router-link to="/mine" class="mine router-link"><i></i>我的</router-link>
  </div>
</template>

<script>
export default {
  name: "footerBar",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.footer-bar {
  display: flex;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #999;
    font-size: 11px;
    letter-spacing: 0.8px;
    width: 100%;
    height: 100%;
    &.router-link-exact-active {
      color: #3d4c46;
    }
    i {
      display: block;
      width: 27px;
      height: 27px;
      margin-left: 33px;
      margin-bottom: 4px;
    }

    &.home {
      i {
        background: url("../assets/imgs/icon/home.png") no-repeat center;
        background-size: 100% 100%;
      }
      &.router-link-active {
        i {
          background: url("../assets/imgs/icon/home-c.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
    &.classification {
      i {
        background: url("../assets/imgs/icon/classification.png") no-repeat
          center;
        background-size: 100% 100%;
      }
      &.router-link-exact-active {
        i {
          background: url("../assets/imgs/icon/classification-c.png") no-repeat
            center;
          background-size: 100% 100%;
        }
      }
    }
    &.findings {
      i {
        background: url("../assets/imgs/icon/find.png") no-repeat center;
        background-size: 100% 100%;
      }
      &.router-link-active {
        i {
          background: url("../assets/imgs/icon/find-c.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
    &.mine {
      i {
        background: url("../assets/imgs/icon/main.png") no-repeat center;
        background-size: 100% 100%;
      }
      &.router-link-exact-active {
        i {
          background: url("../assets/imgs/icon/main-c.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
