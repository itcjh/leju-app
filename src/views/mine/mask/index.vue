<template>
  <div class="mask-main">
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
          <button class="sub">确定</button>
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
    return {
      isShow: true,
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
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    closeMask() {
      this.isShow = false;
    }
  }
};
</script>

<style scoped lang="scss">
.mask-main {
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    background-color: rgba(216, 216, 216, 0.836);
    // background-color: red;
    z-index: 998;
    .mask-c {
      position: relative;
      margin: 189px auto;
      width: 314px;
      height: 462px;
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
        width: 100%;
        height: 100%;
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
          margin-top: 8px;
          margin-left: 74px;
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
</style>
