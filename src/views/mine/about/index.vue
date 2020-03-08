<template>
  <div class="about-main">
    <div class="header">
      <div class="logo"></div>
      <div class="version">
        <p>造物1.1.01</p>
      </div>
    </div>
    <div class="content">
      <div class="content-c">
        <div class="privacy com">
          <p>隐私说明</p>
          <div class="right"></div>
        </div>
        <div class="official-web com">
          <p>官方网站</p>
          <div class="right"></div>
        </div>
        <div class="update com">
          <p>版本更新</p>
          <div class="right"></div>
        </div>
        <div class="share com">
          <p>分享app</p>
          <div class="right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.about-main {
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 234px;
    background-color: #354e44;
    .logo {
      width: 106px;
      height: 106px;
      border-radius: 50%;
      background: url("../../../assets/imgs/main/logo.png") no-repeat center;
    }
    .version {
      margin-top: 11px;
      font-size: 13px;
      color: #ffffff;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    .content-c {
      width: 335px;
      height: 100%;
      margin: 17px auto;
      .com {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 61px;
        border-bottom: 1px solid rgba(127, 127, 127, 0.1);
        text-align: left;
        line-height: 61px;
        font-size: 16px;
        font-weight: bold;
        color: #3e3e3e;
        .right {
          width: 17px;
          height: 17px;
          background: url("../../../assets/imgs/icon/right.png") no-repeat
            center;
          background-size: cover;
        }
      }
    }
  }
}
</style>
