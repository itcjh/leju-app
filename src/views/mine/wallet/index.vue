<template>
  <div class="wallet-main">
    <div class="header">
      <Header text="卡包"></Header>
    </div>
    <div class="content">
      <div class="content-c">
        <div class="wallet-info" v-for="item in walletInfo" :key="item.id">
          <div class="img-info">
            <img :src="item.img" alt="" />
            <div class="text">
              <p>{{ item.offer }}</p>
              <span>{{ item.type }}</span
              ><br />
              <span>{{ item.date }}</span>
            </div>
          </div>
          <div class="goDO">
            <span>去使用</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/mine/header.vue";
export default {
  props: {},
  components: { Header },
  data() {
    return {
      walletInfo: [
        {
          id: 134,
          img: require("@/assets/imgs/main/card-packet-1.png"),
          offer: "¥50满500减",
          type: "店铺优惠券",
          date: "2019.1.3-2019.5.11"
        },
        {
          id: 135,
          img: require("@/assets/imgs/main/card-packet-2.png"),
          offer: "¥150满1000减",
          type: "店铺优惠券",
          date: "2019.1.3-2019.5.11"
        },
        {
          id: 136,
          img: require("@/assets/imgs/main/card-packet-3.png"),
          offer: "¥30满200减",
          type: "店铺优惠券",
          date: "2019.1.3-2019.5.11"
        },
        {
          id: 137,
          img: require("@/assets/imgs/main/card-packet-4.png"),
          offer: "¥10满150减",
          type: "店铺优惠券",
          date: "2019.1.3-2019.5.11"
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
.wallet-main {
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
      margin: 30px auto;
      .wallet-info {
        width: 100%;
        height: 104px;
        background: url("../../../assets/imgs/icon/wallet-1.png") no-repeat
          center;
        // background-size: cover;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img-info {
          display: flex;
          margin-left: 28px;
          img {
            width: 68px;
            height: 68px;
          }
          .text {
            margin-top: 10px;
            margin-left: 23px;
            line-height: 15px;
            text-align: left;
            p {
              font-size: 13px;
              color: #3e3e3e;
              font-weight: bold;
            }
            span {
              font-size: 10px;
              color: #8d8d8d;
            }
          }
        }
        .goDO {
          margin-right: 17px;
          font-size: 13px;
          color: #354e44;
        }
      }
    }
  }
}
</style>
