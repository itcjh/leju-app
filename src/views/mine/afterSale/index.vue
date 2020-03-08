<template>
  <div class="afterSale-main">
    <div class="header">
      <Header text="申请售后"></Header>
    </div>
    <div class="content">
      <div class="content-c">
        <div class="type">
          <p>服务类型</p>
          <ul class="events">
            <li
              v-for="(item, index) in type"
              :key="item.index"
              @click="changeBg(index)"
              :class="{ liBackground: changeBackground == index }"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="order-info">
          <div class="title">
            <div class="order-num">
              订单编号：1727384727
            </div>
          </div>
          <div class="content-info">
            <img src="../../../assets/imgs/main/order-sofa.png" alt="" />
            <div class="img-info">
              <div class="img-title">
                <div class="img-name">头层牛皮沙发</div>
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
        </div>
        <div class="description">
          <p>问题描述</p>
          <textarea
            name="textarea"
            placeholder="请输入您的评价信息"
            rows="10"
            cols="50"
          ></textarea>
        </div>
        <div class="footer">
          <button class="btn">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/mine/header.vue";
export default {
  props: {},
  components: {
    Header
  },
  data() {
    return {
      type: [{ name: "换货" }, { name: "退货" }, { name: "仅退款" }],
      changeBackground: 0
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    changeBg(index) {
      this.changeBackground = index;
    }
  }
};
</script>

<style scoped lang="scss">
.afterSale-main {
  position: relative;
  .header {
    overflow: hidden;
    width: 100%;
    height: 104px;
    background-color: #354e44;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 82px;
    border-radius: 20px 20px 0 0;
    background-color: #f0ebe6;
    .content-c {
      width: 335px;
      height: 100%;
      margin: 0 auto;
      .type {
        margin-top: 11px;
        p {
          text-align: left;
          font-size: 16px;
          color: #3e3e3e;
        }
        .events {
          margin-top: 10px;
          display: flex;
          justify-content: flex-start;
          li {
            width: 62px;
            height: 25px;
            text-align: center;
            line-height: 25px;
            border: 1px solid #2d4f43;
            border-radius: 5px;
            margin-right: 16px;
          }
          .liBackground {
            background: #2d4f43;
            color: #fff;
          }
        }
      }

      .order-info {
        margin-top: 16px;
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
            }
            .serial-number {
              // width: 100%;
              margin-bottom: 7px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .specification {
              margin-bottom: 30px;
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
      }
      .description {
        width: 335px;
        margin-top: 16px;
        p {
          text-align: left;
          font-size: 16px;
          color: #3e3e3e;
        }

        textarea {
          margin-top: 16px;
          width: 335px;
          height: 167px;
          border-radius: 12px;
          border: none;
          font-size: 11px;
          color: #8d8d8d;
          line-height: 50px;
          //   text-align: center;
          outline: none;
        }
      }
      .footer {
        margin-top: 116px;
        margin-bottom: 95px;
        .btn {
          width: 268px;
          height: 47px;
          background-color: #354e44;
          font-size: 15px;
          color: #ffffff;
          border-radius: 7px;
        }
      }
    }
  }
}
</style>
