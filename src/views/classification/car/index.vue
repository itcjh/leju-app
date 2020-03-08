<template>
  <div class="car-main">
    <div class="header">
      <div class="title">
        <i @click="goBack"></i>
        <p>购物车</p>
      </div>
    </div>
    <div class="content">
      <div class="content-c wrap-c">
        <ul class="list">
          <li class="item" v-for="(item, index) in carArr" :key="index">
            <span>
              <input type="checkbox" id="checkbox1" /><label
                for="checkbox1"
              ></label>
            </span>
            <img :src="item.img" alt="" />
            <div class="text">
              <p>{{ item.title }}</p>
              <p>编号: {{ item.serialNumber }}</p>
              <p>数量: {{ item.num }}</p>
            </div>
            <div class="price">
              {{ item.price }}
            </div>
            <div class="num">
              <div class="minus">
                <i></i>
              </div>
              <div class="nums">1</div>
              <div class="add"><i></i></div>
            </div>
          </li>
        </ul>
        <div class="like">
          <span></span>
          <p>猜你喜欢</p>
          <span></span>
        </div>
        <ul class="like-detail">
          <li v-for="(item, index) in carArr" :key="index">
            <img :src="item.img" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="footer-c wrap-c">
        <span class="checkAll"
          ><span>全选</span><label for="checkbox1"></label
          ><input type="checkbox" id="checkbox1" />
        </span>
        <div class="footer-box">
          <div class="total">合计: ¥0</div>
          <div class="settle">结算</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      carArr: [
        {
          img: require("@/assets/imgs/classification-shopping/chair.png"),
          title: "切割式床头柜",
          serialNumber: 114534,
          num: "X1",
          price: "¥560"
        },
        {
          img: require("@/assets/imgs/classification-shopping/chair.png"),
          title: "切割式床头柜",
          serialNumber: 114534,
          num: "X1",
          price: "¥560"
        },
        {
          img: require("@/assets/imgs/classification-shopping/chair.png"),
          title: "切割式床头柜",
          serialNumber: 114534,
          num: "X1",
          price: "¥560"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.wrap-c {
  width: 336px;
  height: 100%;
  margin: 0 auto;
}
.header {
  height: 104px;
  background: #354e44;
  overflow: hidden;
  .title {
    font-size: 16px;
    color: #ffffff;
    position: absolute;
    top: 44px;
    left: 0;
    display: flex;
    // justify-content: center;
    align-items: center;
    i {
      margin-left: 20px;
      margin-right: 129px;
      display: block;
      width: 12px;
      height: 19px;
      background: url("../../../assets/imgs/icon/left.png") no-repeat center;
      background-size: cover;
    }
  }
}
.content {
  margin-top: -30px;
  background-color: #f0ebe6;
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .list {
    margin-top: 35px;
    .item {
      margin-bottom: 16px;
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 104px;
      border-radius: 12px;
      background: #ffffff;
      span {
        margin-left: 19px;
        display: block;
      }
      img {
        margin: 0 23px 0 8px;
        width: 68px;
        height: 68px;
      }
      .text {
        margin-right: 58px;
        text-align: start;
        font-size: 11px;
        color: #8d8d8d;
        line-height: 18px;
        p:nth-child(1) {
          font-weight: bold;
          font-size: 13px;
          color: #3e3e3e;
        }
      }
      .price {
        font-size: 13px;
        color: #8d8d8d;
      }
      .num {
        position: absolute;
        bottom: 9px;
        right: 32px;
        display: flex;
        .minus,
        .add {
          width: 20px;
          height: 20px;
          line-height: 20px;
          border-radius: 10.8px;
          background: #f1ece7;
          i {
            display: block;
            width: 10px;
            height: 10px;
            margin: 5px;
            background: url("../../../assets/imgs/icon/minus.png") no-repeat
              center;
            background-size: cover;
          }
        }
        .add {
          i {
            background: url("../../../assets/imgs/icon/add.png") no-repeat
              center;
          }
        }
        .nums {
          margin: 0 4px;
          width: 36px;
          height: 20px;
          line-height: 20px;
          border-radius: 10.8px;
          background: #f1ece7;
        }
      }
    }
  }
  .like {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 47px 0 25px;
    height: 22px;
    p {
      margin: 0 17px;
      font-size: 16px;
      color: #3e3e3e;
    }
    span {
      display: block;
      background: #dccec0;
      width: 85px;
      height: 2px;
    }
  }
  .like-detail {
    display: flex;

    justify-content: space-between;
    li {
      width: 104px;
      height: 104px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.footer {
  height: 71px;
  background: #ffffff;
  margin-top: 68px;
  .footer-c {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .checkAll {
      display: flex;
      align-items: center;
      // display: block;
      font-size: 16px;
      color: #3e3e3e;
      // width: 50px;
      height: 12px;
      line-height: 12px;
    }
    .footer-box {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #3e3e3e;
      .settle {
        margin-left: 13px;
        width: 104px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #ffffff;
        background: #354e44;
        border-radius: 7px;
      }
    }
  }
}

input[type="checkbox"] {
  width: 12px;
  height: 12px;
  background-color: #fff;
  -webkit-appearance: none;
  border: 1px solid #c9c9c9;
  border-radius: 2px;
  outline: none;
}
input[type="checkbox"]:checked {
  background: url("../../../assets/imgs/icon/correct.png") no-repeat center;
  background-size: 100% 100%;
}
</style>
