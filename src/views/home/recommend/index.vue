<template>
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <div class="banner">
          <swiper :options="bannerOption" ref="mySwiper">
            <swiper-slide v-for="item in bannerImgs" :key="item.id">
              <img :src="item.img" alt="" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>

        <div class="container">
          <TitleTl class="titleTl" text="品类推荐"></TitleTl>
          <div class="category">
            <div class="category wrap-c">
              <swiper :options="categoryOption" ref="mySwiper">
                <swiper-slide v-for="item in categoryImgs" :key="item.id">
                  <img :src="item.img" alt="" />
                  <div class="category-demo">
                    <p>{{ item.text }}</p>
                    <p>{{ item.elText }}</p>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <TitleTl class="titleTl" text="特色优选"></TitleTl>
          <div class="feature">
            <swiper :options="featureOption" ref="mySwiper">
              <swiper-slide v-for="item in featureImgs" :key="item.id">
                <div class="box">
                  <img :src="item.img" alt="" />
                  <div class="category-demo">
                    <p>{{ item.title }}</p>
                    <p>{{ item.elText }}</p>
                    <div class="category-box">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p>{{ item.text }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
////  引入BScroll
import BScroll from "@better-scroll/core";
// 引入title组件
import TitleTl from "../../../components/home/title";
// 引入swiper轮播
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// 引入辅助函数
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props: {},
  data() {
    return {
      /////////////////////////////        banner的swiper配置
      bannerOption: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      /////////////////////////////        品类的配置
      categoryOption: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      //////////////////////////          特色优选
      featureOption: {
        slidesPerView: 1.25,
        loop: true,
        centeredSlides: true,
        spaceBetween: 20
      }
    };
  },
  computed: {
    ...mapState({
      bannerImgs(state) {
        return state.home.bannerImgs;
      },
      categoryImgs(state) {
        return state.home.categoryImgs;
      },
      featureImgs(state) {
        return state.home.featureImgs;
      }
    })
  },
  created() {},
  mounted() {
    // 初始化Bscroll
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper, {
      click: true
    });
  },
  methods: {},
  components: {
    swiper,
    swiperSlide,
    TitleTl
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  .content {
    padding-bottom: 88px;
  }
}
.main {
  height: 100%;
  position: relative;
  .wrap-c {
    width: 352px;
    height: 100%;
    margin: 0 auto;
  }

  //////////////////           公共的swiper样式
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    // -webkit-box-pack: center;
    // -ms-flex-pack: center;
    // -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .banner {
    width: 100%;
    height: 258px;
    .swiper-slide {
      height: 258px;
      // background: #fff;
    }
    .swiper-pagination {
      margin-bottom: 15px;
      height: 10px;
      width: 100%;
      ::v-deep .swiper-pagination-bullet {
        height: 100%;
        width: 10px;
        background-color: #d8d8d8;
      }
    }
  }
  .container {
    // margin-bottom: 88px;
    .titleTl {
      margin-bottom: 20px;
    }
    .category {
      height: 166px;
      .swiper-slide {
        width: 104px;
        height: 70px;
        background: #fff;
        position: relative;
        img {
          position: absolute;
          top: 26px;
          width: 72px;
          height: 62px;
        }
        .category-demo {
          position: absolute;
          top: 110px;
          font-size: 13px;
          font-weight: bold;
          color: #3e3e3e;
          text-align: start;
          line-height: 15px;
          p:nth-child(2) {
            font-size: 10px;
            color: #b0b0b0;
          }
        }
      }
    }
    .feature {
      height: 197px;

      //   padding-top: 27px;
      .swiper-slide {
        width: 295px;
        height: 157px;
        flex-direction: column-reverse;
        // align-items: end;
        justify-content: flex-start;

        .box {
          width: 295px;
          height: 130px;
          background: #fff;
          border-radius: 10px;
          img {
            position: absolute;
            z-index: 999;
            top: 0px;
            left: 20px;
            //   margin-top: -20px;
            width: 97px;
            height: 140px;
          }
          .category-demo {
            text-align: start;
            margin: 25px 0 0 127px;
            font-size: 9px;
            color: #b0b0b0;
            p:nth-child(1) {
              font-size: 13px;
              color: #3e3e3e;
              font-weight: bold;
            }
            p:nth-child(2) {
              margin: 3px 0 9px;
            }
            p:nth-child(3) {
              font-size: 11px;
              color: #3e3e3e;
            }
            .category-box {
              display: flex;
              height: 10px;
              width: 100%;
              margin-bottom: 14px;
              //   background: red;
              span {
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                margin-right: 4px;
              }
              span:nth-child(1) {
                background: #446675;
              }
              span:nth-child(2) {
                background: #6a4826;
              }
              span:nth-child(3) {
                background: #e7d8bb;
              }
            }
          }
        }
      }
    }
  }
}
</style>
