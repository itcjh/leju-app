<template>
  <div class="brand-main">
    <div class="header">
      <Header text="品牌"></Header>
    </div>
    <div class="content">
      <div class="content-c">
        <div class="brand-info" v-for="item in brandList" :key="item.id">
          <div class="tips">
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="img-info">
            <img :src="item.img" alt="" />
            <div class="text">
              <div class="img-name">{{ item.name }}</div>
              <div class="fans">粉丝:{{ item.fans }}</div>
            </div>
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
      brandList: [
        {
          id: 128,
          img: require("@/assets/imgs/main/article-lamp.png"),
          name: "Hartford 系列",
          fans: "91893"
        },
        {
          id: 129,
          img: require("@/assets/imgs/main/brand-od.png"),
          name: "迪欧 极简系列",
          fans: "18293"
        },
        {
          id: 130,
          img: require("@/assets/imgs/main/brand-kuokuyo.png"),
          name: "KUOKUYO品牌家具",
          fans: "271890"
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
.brand-main {
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
      .brand-info {
        width: 100%;
        height: 104px;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 12px;
        .tips {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          height: 17px;
          .dots {
            display: flex;
            align-items: center;
            width: 25px;
            height: 100%;
            margin-right: 3px;
            span {
              margin-right: 3px;
              width: 3px;
              height: 3px;
              border-radius: 50%;
              background-color: #d8d8d8;
            }
          }
        }
        .img-info {
          display: flex;
          width: 90%;
          height: 70px;
          margin-left: 27px;
          img {
            width: 70px;
            height: 70px;
          }
          .text {
            margin-top: 15px;
            margin-left: 33px;
            color: #3e3e3e;
            .img-name {
              font-size: 16px;
              font-weight: bold;
              margin-bottom: 8px;
            }
            .fans {
              text-align: left;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
