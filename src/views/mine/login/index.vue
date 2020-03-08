<template>
  <div class="main">
    <div class="logo"></div>
    <div class="content">
      <div class="content-c wrap-c">
        <div class="box">
          <div class="user demo">
            <input
              type="text"
              v-model="form.username"
              placeholder="请输入用户名"
            />
            <i></i>
          </div>
          <div class="password demo">
            <input
              type="text"
              v-model="form.password"
              placeholder="请输入密码"
            />
            <i></i>
            <span></span>
          </div>
          <div class="login" @click="goLogin">
            登录
          </div>
          <div class="phoneLogin">
            <p>海外手机号登录</p>
            <p>忘记密码</p>
          </div>
          <div class="register">
            立即注册
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-c wrap-c">
        <div class="software-login">
          <i></i>
          <span>第三方软件登陆</span>
          <i></i>
        </div>
        <div class="footer-box">
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import loginApi from "@/api/login/index";
export default {
  props: {},
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    // num() {
    //   return this.$store.state.userModule.username;
    // },
    ...mapState({
      usernames: function(state) {
        return state.userModule.username;
      }
    })
  },
  created() {},
  mounted() {},
  methods: {
    goLogin() {
      console.log(this.form);
      loginApi
        .login({
          ...this.form
        })
        .then(res => {
          if (res.code == "S") {
            this.$toast.success("登录成功");
            localStorage.setItem("user", JSON.stringify(this.form));
            this.addUserName(this.username);
            this.$router.push({ path: "/home" });

            // this.$router.push("/home");
          } else {
            this.$toast.fail("用户名或密码错误");
          }
        });
    },
    ...mapMutations({
      addUserName: "user/addUserName"
    })
  },
  components: {}
};
</script>

<style scoped lang="scss">
.main {
  .logo {
    border-radius: 50%;
    width: 106px;
    height: 106px;
    margin: 77px auto 93px;
    background: url("../../../assets/imgs/main/logo.png") no-repeat center;
    background-size: cover;
  }
  .wrap-c {
    width: 268px;
    margin: 0 auto;
  }
  .content {
    width: 100%;
    .content-c {
      .box {
        width: 100%;
        .demo {
          input {
            padding-left: 36px;
            width: 232px;
            border: none;
            height: 37px;
            font-size: 12px;
            background: #e3dfda;
            color: #9f9f9f;
            outline: none;
            border-radius: 7px;
          }
          i {
            position: absolute;
            left: 13px;
            top: 12.5px;
            width: 14px;
            height: 14px;
            background: url("../../../assets/imgs/icon/@.png") no-repeat center;
            background-size: cover;
          }
          input::placeholder {
            color: #9f9f9f;
          }
          &.user {
            position: relative;
          }
          &.password {
            position: relative;
            margin: 18px 0 24px;
            i {
              width: 13px;
              height: 15px;
              top: 11.5px;
              background: url("../../../assets/imgs/icon/passworld.png")
                no-repeat center;
              background-size: cover;
            }
            span {
              position: absolute;
              right: 19px;
              bottom: 13px;
              width: 18px;
              height: 10px;
              background: url("../../../assets/imgs/icon/close-eye.png")
                no-repeat center;
              background-size: cover;
            }
          }
        }
        .login {
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
        .phoneLogin {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #a5a5a5;
        }
        .register {
          margin-top: 119px;
          font-weight: bold;
          font-size: 20px;
          color: #354e44;
          letter-spacing: 1.43px;
        }
      }
    }
  }
  .footer {
    margin-bottom: 97px;
    margin-top: 18px;
    font-size: 12px;
    color: #a5a5a5;
    .footer-c {
      .software-login {
        display: flex;
        justify-content: space-between;
        align-items: center;
        i {
          width: 63px;
          height: 1px;
          background: #dddddd;
        }
      }
      .footer-box {
        // margin-top: 34px;
        display: flex;
        height: 32px;
        width: 148px;
        margin: 34px auto 0;
        justify-content: space-between;
        i {
          display: block;
          width: 32px;
          height: 32px;
          background: url("../../../assets/imgs/icon/QQ.png") no-repeat center;
          background-size: cover;
        }
        i:nth-child(2) {
          background: url("../../../assets/imgs/icon/wb.png") no-repeat center;
          background-size: cover;
        }
        i:nth-child(3) {
          background: url("../../../assets/imgs/icon/wx.png") no-repeat center;
          background-size: cover;
        }
      }
    }
  }
}
</style>

