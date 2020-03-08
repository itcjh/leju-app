<template>
  <div class="like-main">
    <div class="header">
      <Header text="收藏"></Header>
    </div>
    <div class="content">
      <div class="content-c">
        <div class="like-info" v-for="item in likeList" :key="item.id">
          <div class="content-info">
            <img :src="item.img" alt="" />
            <div class="img-info">
              <div class="img-title">
                <div class="img-name">{{ item.name }}</div>
              </div>
              <div class="serial-number">
                <p>编号：{{ item.serialNumber }}</p>
              </div>
              <div class="specification">
                <p>规格：{{ item.specification }}</p>
              </div>
              <div class="total">
                <span>收藏:{{ item.likeNum }}</span>
                <span>{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/mine/header.vue";
import { privateEncrypt } from "crypto";
export default {
  props: {},
  components: {
    Header
  },
  data() {
    return {
      likeList: [
        {
          id: 120,
          img: require("@/assets/imgs/main/order-sofa.png"),
          name: "头层牛皮沙发",
          serialNumber: "114534",
          specification: "长430X宽522X高848mm",
          likeNum: "241",
          price: "¥2719"
        },
        {
          id: 121,
          img: require("@/assets/imgs/main/collection.png"),
          name: "Valley 单人沙发",
          serialNumber: "114534",
          specification: "长430X宽522X高848mm",
          likeNum: "241",
          price: "¥560"
        },
        {
          id: 122,
          img: require("@/assets/imgs/main/card-packet-1.png"),
          name: "切割式床头柜",
          serialNumber: "114534",
          specification: "长430X宽522X高848mm",
          likeNum: "241",
          price: "¥560"
        },
        {
          id: 123,
          img: require("@/assets/imgs/main/collection-phone.png"),
          name: "手机充电放置器 ",
          serialNumber: "114534",
          specification: "长430X宽522X高848mm",
          likeNum: "241",
          price: "¥560"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.like-main {
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
      margin: 32px auto;
      .like-info {
        margin-bottom: 20px;
        border-radius: 12px 12px;
        width: 100%;
        height: 104px;
        background-color: #fff;
        overflow: hidden;
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
              font-size: 11px;
              color: #8d8d8d;
            }
            .specification {
              margin-bottom: 7px;
              p {
                text-align: left;
                font-size: 11px;
                color: #8d8d8d;
              }
            }
            .total {
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              color: #3e3e3e;
            }
          }
        }
      }
    }
  }
}
</style>
