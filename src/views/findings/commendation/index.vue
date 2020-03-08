<template>
  <div class="commendation-main">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="container">
        <div class="banner">
          <Commendation
            textEn="Cutting furniture"
            text="切割家具 系列"
            hight="60"
            area="45"
          ></Commendation>
          <div class="cutting-furniture">
            <swiper :options="furnitureOption" ref="mySwiper">
              <swiper-slide
                class="box"
                v-for="(item, index) in cuttingArr"
                :key="index"
              >
                <img :src="item.img" alt="" />
                <div class="cutting-demo">
                  <p>{{ item.text }}</p>
                  <p>{{ item.textEn }}</p>
                  <div class="cutting-box">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>{{ item.price }}</span>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="container">
        <div class="smple-banner banner">
          <Commendation
            textEn="Cutting furniture"
            text="切割家具 系列"
            hight="60"
            area="45"
          ></Commendation>
          <div class="cutting-furniture">
            <swiper :options="furnitureOption" ref="mySwiper">
              <swiper-slide
                class="box"
                v-for="(item, index) in cuttingArr"
                :key="index"
              >
                <img :src="item.img" alt="" />
                <div class="cutting-demo">
                  <p>{{ item.text }}</p>
                  <p>{{ item.textEn }}</p>
                  <div class="cutting-box">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>{{ item.price }}</span>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- <div class="banner">
      <Commendation
        textEn="Cutting furniture"
        text="切割家具 系列"
        hight="60"
        area="45"
      ></Commendation>
      <div class="cutting-furniture">
        <swiper :options="furnitureOption" ref="mySwiper">
          <swiper-slide
            class="box"
            v-for="(item, index) in cuttingArr"
            :key="index"
          >
            <img :src="item.img" alt="" />
            <div class="cutting-demo">
              <p>{{ item.text }}</p>
              <p>{{ item.textEn }}</p>
              <div class="cutting-box">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>{{ item.price }}</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div> -->
  </div>
</template>

<script>
// 引入title和内容组件
import Commendation from "@/components/findings/Commendation";
// 引入swiper轮播
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {},
  data() {
    return {
      swiperOption: {
        direction: "vertical"
      },
      furnitureOption: {
        slidesPerView: 1.45,
        spaceBetween: 30,
        centeredSlides: true
      },
      cuttingArr: [
        {
          img: require("@/assets/imgs/find-recommend/cabinet-1.png"),
          text: "切割式床头柜",
          textEn: "by Adrianne Ho",
          price: "¥560"
        },
        {
          img: require("@/assets/imgs/find-recommend/cabinet-2.png"),
          text: "切割式床头柜",
          textEn: "by Adrianne Ho",
          price: "¥560"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {
    swiper,
    swiperSlide,
    Commendation
  }
};
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
}
// .container {
//   height: 300px;
// }
.wrap-c {
  width: 331px;
  margin: 0 auto;
}
.commendation-main {
  height: 100%;
  .banner.smple-banner {
    background: url("../../../assets/imgs/find-recommend/recommend-bg-2.png")
      no-repeat;
    background-size: cover;
  }
  .banner {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../../assets/imgs/find-recommend/recommend-bg-1.png")
      no-repeat center;
    background-size: cover;
    .cutting-furniture {
      position: absolute;
      left: 0;
      bottom: 118px;
      width: 100%;
      .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 248px;
          height: 132px;
          background: #fff;
          border-radius: 5px;
          img {
            width: 100px;
            height: 87px;
          }
          .cutting-demo {
            text-align: start;
            font-size: 13px;
            color: #3e3e3e;
            .cutting-box {
              margin-bottom: 17px;
              display: flex;
              height: 10px;
              span {
                margin-right: 4px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #446675;
              }
              span:nth-child(2) {
                background: #6a4826;
              }
              span:nth-child(3) {
                background: #e7d8bb;
              }
            }
            p:nth-child(2) {
              margin: 5px 0;
              font-size: 11px;
              color: #b0b0b0;
            }
          }
        }
      }
    }
  }
}
</style>
