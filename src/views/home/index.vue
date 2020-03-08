<template>
  <div class="main">
    <div class="header">
      <div class="header-c">
        <i class="message"></i>
        <div class="text">
          <router-link to="/home/recommend" tag="p" class="recommend"
            >推荐</router-link
          >
          <router-link to="/home/brand" tag="p" class="brand">品牌</router-link>
        </div>
        <div class="box">
          <router-link tag="i" class="search" to="/search"></router-link>
          <!-- <i class="search"></i> -->
          <router-link to="/car" tag="i" class="shopping"></router-link>
          <!-- <i class="shopping"></i> -->
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
.main {
  height: 100%;
  // position: relative;
  .header {
    width: 100%;
    position: absolute;
    left: 0;
    top: 44px;
    z-index: 999;
    color: #fff;
    .header-c {
      width: 352px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .message {
        width: 21px;
        height: 21px;
        background: url("../../assets/imgs/icon/message.png") no-repeat center;
        background-size: cover;
      }
      .text {
        display: flex;
        margin-left: 30px;
        font-size: 16px;
        justify-content: space-between;
        width: 80px;
        p {
          letter-spacing: 1.14px;
          position: relative;
          &.router-link-active::before {
            content: "";
            position: absolute;
            z-index: 666;
            bottom: -7px;
            left: 0;
            width: 100%;
            height: 3px;
            border-radius: 5px;
            background: #fff;
          }
        }
      }
      .box {
        display: flex;
        justify-content: space-between;
        width: 54px;
        i {
          width: 19px;
          height: 19px;

          &.search {
            background: url("../../assets/imgs/icon/search.png") no-repeat
              center;
            background-size: cover;
          }
          &.shopping {
            background: url("../../assets/imgs/icon/shopping.png") no-repeat
              center;
            background-size: cover;
          }
        }
      }
    }
  }
}
</style>
