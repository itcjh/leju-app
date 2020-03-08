<template>
  <div class="mine">
    <div class="wrapper">
      <div class="content">
        <div class="header" v-if="userObj">
          <div class="user-info">
            <!-- <div class="avatar"></div> -->
            <img class='user-avatar' src="http://bufan.cloud/upload/leju/20191110181617.JPG" alt="">
            <div class="info-text">用户名: {{ userObj.username }}</div>
            <router-link to="/save">
              <div class="set"></div>
            </router-link>
          </div>
        </div>
        <div class="header" v-if="!userObj">
          <div class="user-info">
            <div class="avatar"></div>
            <div class="info-text">
              <span>hi～</span>
              <p>你还没有登录呢</p>
            </div>
            <router-link to="/save" tag="div" class="set"></router-link>
            <!-- <div class="set"></div> -->
          </div>
        </div>
        <div class="btn" v-if="!userObj">
          <router-link to="/register" tag="div" class="register">
            注册
          </router-link>
          <router-link to="/login" tag="div" class="login">
            登录
          </router-link>
        </div>
        <div class="contents">
          <div class="content-c">
            <div class="my-order">
              <router-link
                tag="div"
                class="title"
                :to="{ name: 'order', params: { id: 0 } }"
              >
                <p class="my">我的订单</p>
                <span class="right"></span>
              </router-link>
              <div class="order-info">
                <div class="pre-pay active">
                  <router-link :to="{ name: 'order', params: { id: 1 } }">
                    <div class="icon-pay bg"></div>
                  </router-link>
                  <span>待付款</span>
                </div>
                <div class="pre-card active">
                  <router-link :to="{ name: 'order', params: { id: 2 } }">
                    <div class="icon-card bg"></div>
                  </router-link>
                  <span>待收货</span>
                </div>
                <div class="pre-complete active">
                  <router-link :to="{ name: 'order', params: { id: 3 } }">
                    <div class="icon-complete bg"></div>
                  </router-link>
                  <span>已完成</span>
                </div>
                <div class="after-sale active">
                  <router-link to="/afterSale">
                    <div class="icon-sale bg"></div>
                  </router-link>
                  <span>售后</span>
                </div>
              </div>
            </div>

            <ul class="icon-item">
              <li class="collection">
                <!-- <i></i> -->
                <router-link tag="i" to="/like"> </router-link>
                <span>收藏</span>
              </li>
              <li class="brand">
                <!-- <i></i> -->
                <router-link tag="i" to="/branded"></router-link>
                <span>品牌</span>
              </li>
              <li class="article">
                <!-- <i></i> -->
                <router-link tag="i" to="/article"></router-link>
                <span>文章</span>
              </li>
              <li class="address">
                <!-- <i></i> -->
                <router-link tag="i" to="/address"></router-link>
                <span>地址</span>
              </li>
              <li class="wallet">
                <!-- <i></i> -->
                <router-link tag="i" to="/wallet"></router-link>
                <span>卡包</span>
              </li>
              <li class="service">
                <i></i>
                <!-- <router-link tag="i" to="/like"></router-link> -->
                <span>客服</span>
              </li>
              <li class="save">
                <!-- <i></i> -->
                <router-link tag="i" to="/save"></router-link>
                <span>安全</span>
              </li>
              <li class="about">
                <!-- <i></i> -->
                <router-link tag="i" to="/about"></router-link>
                <span>关于</span>
              </li>
              <li class="more">
                <i></i>
                <!-- <router-link tag="i" to="/like"></router-link> -->
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  props: {},
  data() {
    return {
      userObj:{}
    };
  },
  computed: {},
  created() {
    this.getItems()
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper, {
      click: true
    });
  },
  methods: {
     // 本地存储数据
     getItems() {
      this.userObj = JSON.parse(localStorage.getItem("user"));
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.mine {
  color: #3d4c46;
  height: 100%;
  .user-avatar {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
  .header {
    width: 375px;
    height: 75px;
    margin-top: 44px;
    .user-info {
      display: flex;
      justify-content: space-around;
      .avatar {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background: url("../../assets/imgs/main/avatar.png") no-repeat center;
        background-size: cover;
      }
      .info-text {
        margin-top: 21px;
        text-align: left;
        font-size: 14px;
        p {
          margin-top: 10px;
        }
      }
      .set {
        width: 25px;
        height: 25px;
        background: url("../../assets/imgs/icon/set.png") no-repeat center;
        background-size: cover;
      }
    }
  }

  .btn {
    margin-top: 26px;
    display: flex;
    justify-content: center;
    .register,
    .login {
      width: 91px;
      height: 38px;
      font-size: 15px;
      border: 1px solid #3d4c46;
      border-radius: 10px;
      line-height: 38px;
    }
    .login {
      margin-left: 30px;
      background-color: #3d4c46;
      color: #fff;
    }
  }

  .contents {
    margin-top: 26px;
    width: 100%;
    height: 100%;
    .content-c {
      width: 335px;
      margin: 0 auto;
      .my-order {
        width: 100%;
        height: 104px;
        background-color: #fff;
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          width: 282px;
          height: 36px;
          border-bottom: 1px solid #dddddd;
          .my {
            font-size: 13px;
          }
          .right {
            width: 7.6px;
            height: 13px;
            background: url("../../assets/imgs/icon/right.png") no-repeat center;
            background-size: cover;
          }
        }
        .order-info {
          display: flex;
          justify-content: space-between;
          width: 282px;
          margin: 12px auto;
          .active {
            width: 42px;
            height: 43px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .icon-pay {
              background: url("../../assets/imgs/icon/pre-payment.png")
                no-repeat center;
              background-size: contain;
            }
            .icon-card {
              background: url("../../assets/imgs/icon/pre-receipt.png")
                no-repeat center;
              background-size: contain;
            }
            .icon-complete {
              background: url("../../assets/imgs/icon/done.png") no-repeat
                center;
              background-size: contain;
            }
            .icon-sale {
              background: url("../../assets/imgs/icon/after-sale.png") no-repeat
                center;
              background-size: contain;
            }
            .bg {
              width: 26px;
              height: 20px;
            }
            .span {
              font-size: 13px;
            }
          }
        }
      }

      .icon-item {
        margin-top: 26px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: #fff;
        span {
          font-size: 13px;
        }
        i {
          display: block;
          width: 28px;
          height: 27px;
          margin-bottom: 12px;
        }
        // li {
        //   display: flex;
        //   justify-content: center;
        //   flex-wrap: wrap;
        // }
        .collection {
          margin: 30px 87px 0 30px;
          i {
            background: url("../../assets/imgs/icon/collection-2.png") no-repeat
              center;
            background-size: contain;
          }
        }
        .brand {
          margin-top: 30px;
          margin-right: 87px;
          i {
            background: url("../../assets/imgs/icon/brand.png") no-repeat center;
            background-size: contain;
          }
        }
        .article {
          margin: 30px 30px 0 0;
          i {
            background: url("../../assets/imgs/icon/article.png") no-repeat
              center;
            background-size: contain;
          }
        }
        .address {
          margin: 30px 87px 0 30px;
          i {
            background: url("../../assets/imgs/icon/address.png") no-repeat
              center;
            background-size: contain;
          }
        }
        .wallet {
          margin: 30px 87px 0 0;
          i {
            background: url("../../assets/imgs/icon/wallet.png") no-repeat
              center;
            background-size: contain;
          }
        }
        .service {
          margin: 30px 30px 0 0;
          i {
            display: block;

            background: url("../../assets/imgs/icon/service.png") no-repeat
              center;
            background-size: contain;
          }
        }
        .save {
          margin: 30px 87px 30px 30px;
          i {
            background: url("../../assets/imgs/icon/save.png") no-repeat center;
            background-size: contain;
          }
        }
        .about {
          margin: 30px 87px 30px 0;

          i {
            background: url("../../assets/imgs/icon/about.png") no-repeat center;
            background-size: contain;
          }
        }
        .more {
          margin: 30px 30px 30px 0;
        }
      }
    }
  }
}
.wrapper {
  width: 100%;
  height: 100%;
  .content {
    padding-bottom: 150px;
  }
}
</style>
