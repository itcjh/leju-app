<template>
  <div class="order-main">
    <div class="header">
      <Header text="订单列表"></Header>
      <!-- <div class="header-info">
        <div class="left"></div>
        <div class="title">
          订单列表
        </div>
      </div> -->
      <!-- :class="`checked${num == index ? ' act' : ''}`" -->
      <ul class="order-item">
        <li
          :class="{ checked: index == $route.params.id }"
          v-for="(item, index) in orderItem"
          :key="item.id"
          @click="setTab('item', index)"
        >
          {{ item.text }}
          <span></span>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="content-c">
        <div class="all">
          <div class="order-info" v-for="item in list" :key="item.id">
            <div class="title">
              <div class="order-num">
                订单编号：1727384727
              </div>
              <span class="order-status">全部</span>
            </div>
            <div class="content-info">
              <img src="../../../assets/imgs/main/order-sofa.png" alt="" />
              <div class="img-info">
                <div class="img-title">
                  <div class="img-name">头层牛皮沙发</div>
                  <div class="cost">¥560</div>
                </div>
                <div class="serial-number">
                  <p>编号：114534</p>
                  <p>×1</p>
                </div>
                <div class="specification">
                  <p>规格：长430X宽522X高848mm</p>
                </div>
                <div class="total">
                  合计 : ¥560
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="cancel-order" @click="cancel(item.orderId)">
                取消订单
              </div>
              <div
                class="paying"
                @click="paying(item.orderId, item.orderStatus)"
              >
                {{
                  item.orderStatus == "0"
                    ? "待付款"
                    : item.orderStatus == "1"
                    ? "提醒发货"
                    : item.orderStatus == "2"
                    ? "确认收货"
                    : item.orderStatus == "3"
                    ? "申请退款"
                    : "退款成功"
                }}
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="pre-pay" v-show="$route.params.id == 1">
          <div class="order-info">
            <div class="title">
              <div class="order-num">
                订单编号：1727384727
              </div>
              <span class="order-status">待付款</span>
            </div>
            <div class="content-info">
              <img src="../../../assets/imgs/main/order-sofa.png" alt="" />
              <div class="img-info">
                <div class="img-title">
                  <div class="img-name">头层牛皮沙发</div>
                  <div class="cost">¥560</div>
                </div>
                <div class="serial-number">
                  <p>编号：114534</p>
                  <p>×1</p>
                </div>
                <div class="specification">
                  <p>规格：长430X宽522X高848mm</p>
                </div>
                <div class="total">
                  合计 : ¥560
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="cancel-order">
                取消订单
              </div>
              <div class="paying">
                付款
              </div>
            </div>
          </div>
        </div> -->

        <!-- <div class="payed" v-show="$route.params.id == 2">
          <div class="order-info">
            <div class="title">
              <div class="order-num">
                订单编号：1727384727
              </div>
              <span class="order-status">已付款</span>
            </div>
            <div class="content-info">
              <img src="../../../assets/imgs/main/order-sofa.png" alt="" />
              <div class="img-info">
                <div class="img-title">
                  <div class="img-name">头层牛皮沙发</div>
                  <div class="cost">¥560</div>
                </div>
                <div class="serial-number">
                  <p>编号：114534</p>
                  <p>×1</p>
                </div>
                <div class="specification">
                  <p>规格：长430X宽522X高848mm</p>
                </div>
                <div class="total">
                  合计 : ¥560
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="cancel-order">
                取消订单
              </div>
              <div class="paying">
                付款
              </div>
            </div>
          </div>
        </div> -->

        <!-- <div class="finished" v-show="$route.params.id == 3">
          <div class="order-info">
            <div class="title">
              <div class="order-num">
                订单编号：1727384727
              </div>
              <span class="order-status">已完成</span>
            </div>
            <div class="content-info">
              <img src="../../../assets/imgs/main/order-sofa.png" alt="" />
              <div class="img-info">
                <div class="img-title">
                  <div class="img-name">头层牛皮沙发</div>
                  <div class="cost">¥560</div>
                </div>
                <div class="serial-number">
                  <p>编号：114534</p>
                  <p>×1</p>
                </div>
                <div class="specification">
                  <p>规格：长430X宽522X高848mm</p>
                </div>
                <div class="total">
                  合计 : ¥560
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="cancel-order">
                取消订单
              </div>
              <div class="paying">
                付款
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// 引入 header组件
import Header from "@/components/mine/header.vue";
import orderApi from "@/api/order/index";
export default {
  props: {},
  components: {
    Header
  },
  data() {
    return {
      // text: "全部",
      // isShow: true,
      carList: [],
      id: 1,
      userObj: {},
      orderItem: [
        { text: "全部", id: 111 },
        { text: "待付款", id: 112 },
        { text: "已付款", id: 113 },
        { text: "已完成", id: 114 }
      ],
      nowIndex: 0,
      menu_index: 0
      // num: 0
    };
  },
  computed: {
    list() {
      if (this.$route.params.id == "0") {
        return this.carList;
      } else if (this.$route.params.id == "1") {
        return this.carList.filter(ele => ele.orderStatus == "0");
      } else if (this.$route.params.id == "2") {
        return this.carList.filter(
          ele => ele.orderStatus == "1" || ele.orderStatus == "2"
        );
      } else {
        return this.carList.filter(
          ele => ele.orderStatus == "3" || ele.orderStatus == "9"
        );
      }
    }
  },
  created() {
    this.getItems();
    this.getOrderList();
  },
  mounted() {},
  methods: {
    // 订单列表
    getOrderList() {
      console.log("this.$route", this.userObj);
      orderApi
        .getOrderList({
          userId: this.userObj.id
        })
        .then(res => {
          this.carList = res.data.list;
          console.log(res);
        });
    },
    paying(orderId, val) {
      if (val == "0") {
        orderApi
          .payDone({
            id: orderId
          })
          .then(res => {
            this.$toast("付款成功");
            console.log(res);
            this.getOrderList();
          });
      } else if (val == "1") {
        this.$toast("提醒发货");
      } else if (val == "2") {
        orderApi
          .allDone({
            id: orderId
          })
          .then(res => {
            this.$toast("已确认收货");
            this.getOrderList();
            console.log(res);
          });
      } else if (val == "3") {
        orderApi
          .backOrder({
            id: orderId
          })
          .then(res => {
            this.$toast("已申请退款");
            this.getOrderList();
            console.log(res);
          });
      }
    },
    cancel(val) {
      // orderApi
      //   .backOrder({
      //     id: val
      //   })
      //   .then(res => {
      //     console.log(res);
      //   });
    },
    setTab(name, index) {
      this.nowIndex = index;
      // this.num = index;
      // this.text = text;
      this.menu_index = index;
      location.replace("http://localhost:8081/#/mine");
      window.location.hash = `/order/${index}`;
      console.log(this.$route);
    },
    // 本地存储数据
    getItems() {
      this.userObj = JSON.parse(localStorage.getItem("user"));
      console.log(this.userObj);
    }
  }
};
</script>

<style scoped lang="scss">
.order-main {
  position: relative;
  .header {
    overflow: hidden;
    width: 100%;
    height: 167px;
    background-color: #354e44;
    // .header-info {
    //   margin-top: 44px;
    //   display: flex;
    //   .left {
    //     margin-left: 21px;
    //     margin-right: 119px;
    //     width: 12px;
    //     height: 19px;
    //     background: url("../../../assets/imgs/icon/left.png") no-repeat center;
    //     background-size: cover;
    //   }
    //   .title {
    //     font-size: 17px;
    //     color: #fff;
    //   }
    // }

    .order-item {
      width: 335px;
      margin: 15px auto;
      display: flex;
      justify-content: space-around;
      li {
        font-size: 15px;
        color: #fff;
        &.checked {
          span {
            display: block;
            margin-top: 3px;
            width: 100%;
            height: 3px;
            background-color: #f1ece7;
            border-radius: 5px 5px 0 0;
          }
        }
      }
    }
  }

  .content {
    width: 375px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 118px;
    border-radius: 20px 20px 0 0;
    background-color: #f0ebe6;
    .content-c {
      width: 335px;
      height: 100%;
      margin: 0 auto;
      .all,
      .pre-pay,
      .payed,
      .finished {
        margin-top: 30px;
      }
      .order-info {
        border-radius: 12px 12px;
        width: 335px;
        height: 167px;
        background-color: #fff;
        .title {
          padding-top: 11px;
          display: flex;
          justify-content: space-between;
          .order-num {
            margin-left: 18px;
            font-size: 12px;
            color: #3e3e3e;
          }
          .order-status {
            margin-right: 18px;
            font-size: 12px;
            color: #3e3e3e;
          }
        }
        .content-info {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          img {
            width: 81px;
            height: 81px;
            margin-left: 18px;
          }
          .img-info {
            margin-right: 18px;
            width: 206px;
            .img-title {
              display: flex;
              justify-content: space-between;
              margin-bottom: 7px;
              .img-name {
                font-size: 13px;
                font-weight: bold;
                color: #3e3e3e;
              }
              .cost {
                font-size: 13px;
                color: #8d8d8d;
              }
            }
            .serial-number {
              // width: 100%;
              margin-bottom: 7px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .specification {
              margin-bottom: 10px;
              p {
                text-align: left;
              }
            }
            .total {
              display: flex;
              justify-content: flex-end;
              font-size: 13px;
              color: #3e3e3e;
            }
          }
        }
        .footer {
          display: flex;
          justify-content: flex-end;
          margin-right: 18px;
          margin-top: 10px;
          .cancel-order {
            width: 68px;
            height: 25px;
            margin-right: 16px;
            border: 1px solid #6c6c6c;
            border-radius: 5px;
            text-align: center;
            line-height: 25px;
          }
          .paying {
            width: 62px;
            height: 25px;
            border: 1px solid #6c6c6c;
            text-align: center;
            line-height: 25px;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
