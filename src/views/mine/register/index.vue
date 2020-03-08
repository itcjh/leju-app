<template>
  <div class="register">
    <div class="header">
      <div class="header-c wrap-c">
        <div>
          注册
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-c wrap-c">
        <div :v-model="form">
          <div class="ipt">
            <input
              type="text"
              v-model="form.username"
              placeholder="请输入用户名"
            />
          </div>
          <div class="ipt">
            <input
              type="password"
              v-model="form.password"
              placeholder="请输入密码"
            />
          </div>
          <div class="ipt">
            <input
              type="number"
              v-model="form.tel"
              placeholder="请输入手机号"
            />
          </div>
          <div class="ipt">
            <input type="text" v-model="form.email" placeholder="请输入邮箱" />
          </div>
        </div>
        <div class="get-message" @click="register">
          注册
        </div>
        <div class="user-agreement">
          <p>
            完成注册即代表你同意<span>用户协议</span>和<span>隐私政策</span>
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-c wrap-c">
        <router-link tag="p" to="/login"> 已有账号 去登录<i></i> </router-link>
        <!-- <p></p> -->
      </div>
    </div>
  </div>
</template>

<script>
import registerApi from "@/api/login/index";
export default {
  props: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
        tel: "",
        email: ""
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    register() {
      registerApi
        .register({
          ...this.form
        })
        .then(res => {
          if (res.code == "S") {
            this.$toast.success("注册成功");
            this.$router.push({ path: "/login" });
          } else {
            this.$toast.success("注册失败");
          }
        });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.register {
  .wrap-c {
    margin: 0 auto;
    width: 268px;
  }
  .header {
    text-align: start;
    margin: 70px 0 30px;
    font-size: 30px;
    font-weight: 600;
    color: #354e44;
    letter-spacing: 2.14px;
  }
  .content {
    .ipt {
      width: 268px;
      margin-bottom: 20px;
      input {
        width: 206px;
        border: none;
        padding-left: 62px;
        outline: none;
        height: 37px;
        background: #e3dfda;
        font-size: 12px;
        color: #9f9f9f;
        border-radius: 7px;
      }
      input::placeholder {
        color: #9f9f9f;
      }
    }
    .get-message {
      margin: 24px 0 11px;
      width: 100%;
      height: 47px;
      line-height: 47px;
      text-align: center;
      background: #354e44;
      border-radius: 7px;
      font-size: 15px;
      color: #ffffff;
      letter-spacing: 1.2px;
      margin-bottom: 11px;
    }
    .user-agreement {
      text-align: start;
      font-size: 12px;
      color: #a5a5a5;
      margin-bottom: 107px;
      letter-spacing: 0.86px;
      span {
        color: #170000;
      }
    }
  }
  .footer {
    font-size: 16px;
    color: #354e44;
    font-weight: bold;
    i {
      margin-left: 6px;
      display: inline-block;
      width: 8px;
      height: 10px;
      background: url("../../../assets/imgs/main/Right.png") no-repeat center;
    }
  }
}
</style>
