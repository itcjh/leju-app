<template>
  <div class="classDetails-main">
    <div class="banner">
      <swiper :options="bannerOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in bannerImgs" :key="index">
          <img :src="item.img" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div @click="back" class="backing-out"></div>
      <div class="share"></div>
      <div class="love">
        <i></i>
      </div>
    </div>
    <div class="content">
      <div class="content-c wrap-c">
        <div class="title">
          <p>Valley 单人沙发</p>
          <p>by Adrianne Ho</p>
          <p>¥560</p>
        </div>
        <div class="box">
          <p class="titleT">人体工程</p>
          <p class="text">
            座、靠、扶手都是按照人体工程学设计，舒适放松。内部填充高回弹海绵，接触面环形包围，承托更舒适。
          </p>
          <p class="titleT">优雅弧度扶手</p>
          <p class="text">翻遍扶手设计，更好满足手臂承托要求。</p>
          <div class="prop"></div>
          <p class="titleT">高弹海绵</p>
          <p class="text">
            高弹海绵的泡孔直径巨细混合散布，骨架粗细不一样有很大的开孔率，在受压时会在不一样形变状态下发生不一样支持力和反弹力，因而由高弹海绵制造的餐椅，可提供非常好的舒适度。
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-c wrap-c">
        <div class="service">
          <i></i>
          <span>客服</span>
        </div>
        <div class="footer-demo">
          <div class="shopping">
            <i></i>
          </div>
          <div class="buy" @click="goShopping">立即购买</div>
        </div>
      </div>
    </div>

    <!-- 遮罩层 -->
    <div class="mask" v-show="isShow">
      <div class="mask-c">
        <div class="header">
          <div class="imgs">
            <img src="../../../assets/imgs/main/collection.png" alt="" />
            <div class="img-info">
              <p>Valley 单人沙发</p>
              <p class="stock">库存：1028</p>
            </div>
          </div>
          <div class="cancel" @click="closeMask"></div>
        </div>
        <div class="content">
          <div class="color-type">
            <div class="title">颜色分类</div>
            <div class="color-info">
              <div class="text" v-for="item in colorType" :key="item.id">
                {{ item.colorType }}
              </div>
            </div>
          </div>
          <div class="service">
            <div class="title">特色服务</div>
            <div class="service-info">
              <div class="text">
                <p>送货入户</p>
                <span>【商家赠送】</span>
              </div>
              <div class="text">
                <p>上门安装</p>
                <span>【商家赠送】</span>
              </div>
            </div>
          </div>
          <div class="num">
            <div class="title">购买数量</div>
            <div class="counter">
              <div class="less">－</div>
              <div class="nums">1</div>
              <div class="plus">＋</div>
            </div>
          </div>
          <button class="sub" @click="subs">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper轮播
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {},
  data() {
    return {
      isShow: false,
      colorType: [
        {
          colorType: "经典款【橘黄色】"
        },
        {
          colorType: "豪华款【暗夜绿】"
        },
        {
          colorType: "经典款【茶棕色】"
        }
      ],
      bannerOption: {
        slidesPerView: 1,
        spaceBetween: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      bannerImgs: [
        {
          img: require("@/assets/imgs/classification-detail/classification-top1.png")
        },
        {
          img: require("@/assets/imgs/classification-detail/classification-top2.png")
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 返回上一级
    back() {
      this.$router.go(-1);
    },
    goShopping() {
      this.isShow = true;
    },
    closeMask() {
      this.isShow = false;
    },
    subs() {
      this.$router.push("/car");
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped lang="scss">
.classDetails-main {
  // height: 100%;
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(216, 216, 216, 0.836);
    z-index: 999;
    .mask-c {
      position: relative;
      position: absolute;
      left: 31px;
      bottom: 51px;
      width: 314px;
      height: 462px;
      // height: 100%;
      border-radius: 20px;
      background-color: #fff;
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 96px;
        position: absolute;
        top: -28px;
        left: 31px;
        // margin-top: -28px;
        .imgs {
          display: flex;
          img {
            width: 96px;
            height: 96px;
          }
          .img-info {
            margin-top: 49px;
            margin-left: 15px;
            p {
              font-size: 14px;
              color: #3e3e3e;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .stock {
              text-align: left;
              font-size: 12px;
              color: #b0b0b0;
            }
          }
        }
        .cancel {
          width: 21px;
          height: 21px;
          background: url("../../../assets/imgs/icon/cancel.png") no-repeat
            center;
          background-size: cover;
          margin-right: 15px;
        }
      }
      .content {
        position: absolute;
        top: 95px;
        left: 34px;
        text-align: left;
        // width: 100%;
        // height: 100%;
        .color-type {
          .title {
            font-size: 14px;
            font-weight: bold;
            color: #3e3e3e;
          }
          .color-info {
            margin-top: 8px;
            margin-bottom: 3px;
            display: flex;
            flex-wrap: wrap;
            .text {
              margin: 0 4px 4px 0;
              width: 121px;
              height: 30px;
              font-size: 13px;
              font-weight: bold;
              text-align: center;
              line-height: 30px;
              color: #3e3e3e;
              background-color: rgba(242, 244, 243, 0.8);
              border-radius: 5px;
            }
          }
        }
        .service {
          margin-bottom: 18px;
          .title {
            font-size: 14px;
            font-weight: bold;
            color: #3e3e3e;
          }
          .service-info {
            margin-top: 8px;
            margin-bottom: 3px;
            .text {
              margin-bottom: 4px;
              display: flex;
              justify-content: space-between;
              width: 190px;
              height: 30px;
              font-size: 13px;
              line-height: 30px;
              font-weight: bold;
              color: #3e3e3e;
              border-radius: 5px;
              background-color: rgba(242, 244, 243, 0.8);
              p {
                margin-left: 10px;
              }
            }
          }
        }
        .num {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 265px;
          height: 52px;
          border-top: 1px solid rgba(151, 151, 151, 0.35);
          .title {
            font-size: 14px;
            color: #3e3e3e;
            font-weight: bold;
          }
          .counter {
            display: flex;
            color: #3e3e3e;
            .less {
              width: 20px;
              height: 20px;
              text-align: center;
              line-height: 20px;
              font-size: 12px;
              color: #3e3e3e;
              border-radius: 50%;
              background-color: #f1ece7;
            }
            .plus {
              width: 20px;
              height: 20px;
              text-align: center;
              line-height: 20px;
              font-size: 12px;
              color: #3e3e3e;
              border-radius: 50%;
              background-color: #f1ece7;
            }
            .nums {
              width: 36px;
              height: 20px;
              font-size: 12px;
              margin: 0 4px;
              color: #3e3e3e;
              line-height: 20px;
              text-align: center;
              background-color: #f1ece7;
              border-radius: 10.8px;
            }
          }
        }
        .sub {
          margin: 8px 0 0 74px;
          font-size: 16px;
          color: #fff;
          width: 104px;
          height: 40px;
          background: #354e44;
          border-radius: 7px;
          outline: none;
        }
      }
    }
  }
}
.wrap-c {
  width: 311px;
  height: 100%;
  margin: 0 auto;
}
.banner {
  height: 392px;
  position: relative;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide {
      img {
        height: 317px;
      }
    }
    .swiper-pagination {
      z-index: 666;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: -10px;
      width: 100%;
      ::v-deep .swiper-pagination-bullet {
        height: 25px;
        background: #455d60;
        opacity: 1;
        width: 25px;
        &.swiper-pagination-bullet-active {
          width: 35px;
          height: 35px;
          background: #b95734;
        }
      }
    }
  }
  .backing-out {
    position: absolute;
    z-index: 999;
    top: 44px;
    left: 20px;
    width: 12px;
    height: 20px;
    background: url("../../../assets/imgs/icon/left.png") no-repeat center;
    background-size: cover;
  }
  .share {
    position: absolute;
    z-index: 999;
    top: 44px;
    right: 20px;
    width: 22px;
    height: 22px;
    background: url("../../../assets/imgs/icon/share.png") no-repeat center;
    background-size: cover;
  }
  .love {
    position: absolute;
    z-index: 999;
    bottom: 50px;
    right: 49px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #354e44;
    i {
      display: block;
      margin: 14.5px auto;
      width: 22px;
      height: 22px;
      background: url("../../../assets/imgs/icon/collection-1.png") no-repeat
        center;
      background-size: cover;
    }
  }
}
.content {
  text-align: start;
  .title {
    margin: 14px 0 28px;
    font-size: 18.2px;
    color: #3e3e3e;
    text-align: start;
    p:nth-child(1) {
      font-weight: bold;
    }
    p:nth-child(2) {
      margin: 8px 0 12px;
      font-size: 15.4px;
      color: #b0b0b0;
    }
  }

  .box {
    overflow: hidden;
    .titleT {
      font-weight: bold;
      font-size: 14px;
      color: #3e3e3e;
      margin-bottom: 6px;
    }
    .text {
      font-size: 14px;
      color: #8a8a8a;
      text-align: justify;
      line-height: 20px;
      margin-bottom: 12px;
    }
    .prop {
      margin: 18px 0;
      margin-left: 20px;
      width: 217px;
      height: 163px;
      background: url("../../../assets/imgs/classification-detail/classification.png")
        no-repeat center;
      background-size: cover;
    }
  }
}
.footer {
  height: 88px;
  // background: #ffffff;
  overflow: hidden;
  .footer-c {
    display: flex;
    justify-content: space-between;
    height: 40px;
    margin-top: 10px;
    .service {
      width: 26px;
      height: 40px;
      i {
        display: block;
        width: 26px;
        height: 22px;
        background: url("../../../assets/imgs/icon/service.png") no-repeat
          center;
        background-size: cover;
      }
    }
    .footer-demo {
      display: flex;
      .shopping {
        margin-right: 12px;
        width: 64px;
        height: 100%;
        background: #e2e2e2;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          width: 22px;
          height: 22px;
          display: block;
          background: url("../../../assets/imgs/icon/shopping-2.png") no-repeat
            center;
          background-size: cover;
        }
      }
      .buy {
        background: #354e44;
        border-radius: 7px;
        font-size: 16px;
        width: 119px;
        height: 100%;
        line-height: 40px;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>
