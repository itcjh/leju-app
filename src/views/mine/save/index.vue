<template>
  <div class="save-main">
    <div class="header">
      <Header text="账户与安全"></Header>
    </div>
    <div class="content">
      <div class="content-c">
        <div class="username com">
          <p>Z号</p>
          <div class="right"></div>
        </div>
        <div class="userinfo com">
          <p>个人资料</p>
          <div class="right"></div>
        </div>
        <div class="tel com">
          <p>绑定手机号</p>
          <div class="right"></div>
        </div>
        <div class="wx com">
          <p>微信账号</p>
          <div class="right"></div>
        </div>
        <div class="qq com">
          <p>QQ账号</p>
          <div class="right"></div>
        </div>
        <div class="pay com">
          <p>支付绑定</p>
          <div class="right"></div>
        </div>
        <div class="setPassword com">
          <p>设置登录密码</p>
          <div class="right"></div>
        </div>
      </div>
      <div class="outLogn" @click="outLogn">
        <p>退出登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/mine/header.vue";
import loginApi from "@/api/login/index.js";
export default {
  props: {},
  components: { Header },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    outLogn() {
      loginApi.outLogin().then(res => {
        localStorage.clear("user");
        this.$toast.success("退出成功");
        this.$router.push("/mine");
      });
    }
  }
};
</script>

<style scoped lang="scss">
.save-main {
  position: relative;
  .header {
    overflow: hidden;
    width: 100%;
    height: 104px;
    background-color: #354e44;
  }
  .content {
    width: 100%;
    // height: 100%;
    position: absolute;
    top: 82px;
    border-radius: 20px 20px 0 0;
    background-color: #f0ebe6;
    .content-c {
      width: 335px;
      // height: 100%;
      margin: 0 auto;
      .com {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 62px;
        border-bottom: 1px solid rgba(127, 127, 127, 0.1);
        text-align: left;
        line-height: 62px;
        font-size: 16px;
        color: #3e3e3e;
        font-weight: bold;
        .right {
          width: 17px;
          height: 17px;
          background: url("../../../assets/imgs/icon/right.png") no-repeat
            center;
          background-size: cover;
        }
      }
    }
    .outLogn {
      width: 200px;
      height: 62px;
      margin: 20px auto;
      border-radius: 20px;
      background-color: #354e44;
      color: #fff;
      line-height: 62px;
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>
