<template>
  <div class="article-main">
    <div class="header">
      <Header text="文章"></Header>
    </div>
    <div class="content">
      <div class="content-c">
        <div class="article">
          <div class="bloom-lamp" v-for="item in articleList" :key="item.id">
            <img :src="item.img" alt="" />
            <div class="text">
              <div class="text-info">
                <div class="img-name">
                  <p>{{ item.name }}</p>
                </div>
                <div class="like-num">
                  <p>{{ item.likeInfo }}</p>
                </div>
                <div class="img-describe">
                  <p>{{ item.imgDescribe }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="lounge-chair"></div>
          <div class="screen"></div>
          <div class="modern-lamp"></div> -->
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
      articleList: [
        {
          id: 124,
          img: require("@/assets/imgs/main/article-lamp.png"),
          name: "莲花吊灯",
          likeInfo: "1426人已收藏",
          imgDescribe: "一把有温度的好椅子是…"
        },
        {
          id: 125,
          img: require("@/assets/imgs/main/article-chair.png"),
          name: "现代极简实木椅 休闲椅",
          likeInfo: "1426人已收藏",
          imgDescribe: "一把有温度的好椅子是…"
        },
        {
          id: 126,
          img: require("@/assets/imgs/main/article-screen.png"),
          name: "欧式屏风隔断",
          likeInfo: "1426人已收藏",
          imgDescribe: "一把有温度的好椅子是…"
        },
        {
          id: 127,
          img: require("@/assets/imgs/main/article-lamp-2.png"),
          name: "现代极简吊灯",
          likeInfo: "1426人已收藏",
          imgDescribe: "一把有温度的好椅子是…"
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
.article-main {
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
      margin: 20px auto;
      .article {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .bloom-lamp {
          width: 158px;
          height: 208px;
          margin-bottom: 24px;
          border-radius: 5px;
          img {
            width: 100%;
            height: 119px;
          }
          .text {
            width: 100%;
            height: 89px;
            background-color: #fff;
            overflow: hidden;
            .text-info {
              margin-top: 14px;
              margin-left: 18px;
              text-align: left;
              .img-name {
                font-size: 13px;
                color: #3e3e3e;
                font-weight: bold;
              }
              .like-num {
                font-size: 11px;
                color: #8d8d8d;
                margin-top: 5px;
              }
              .img-describe {
                font-size: 11px;
                color: #8d8d8d;
                margin-top: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
