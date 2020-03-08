<template>
  <div class="article-main">
    <div class="nav">
      <ul class="nav-c wrap-c">
        <li
          v-for="(item, index) in navArr"
          :key="item.id"
          @click="setTab(item, index)"
          :class="{ active: index == navIndex }"
        >
          <img :src="index == navIndex ? item.imgActive : item.img" alt="" />
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="content-c wrap-c">
        <div class="lamp" v-if="navIndex == 0">
          <ul>
            <router-link
              tag="li"
              v-for="item in lampArr"
              :key="item.id"
              :to="`/detail/${item.id}`"
            >
              <!-- <li v-for="item in lampArr" :key="item.id"> -->
              <img :src="item.img" alt="" />
              <div class="content-text">
                <p>{{ item.text }}</p>
                <p>{{ item.textEn }}</p>
              </div>
              <div class="content-box">
                <div class="look">
                  <i></i>
                  <span>{{ item.lookNum }}</span>
                </div>
                <div class="share-like">
                  <i></i>
                  <i></i>
                </div>
              </div>
              <!-- </li> -->
            </router-link>
          </ul>
        </div>
        <div class="cabinet" v-if="navIndex == 1">
          <ul>
            <li v-for="item in cabinetArr" :key="item.id">
              <img :src="item.img" alt="" />
              <div class="content-text">
                <p>{{ item.text }}</p>
                <p>{{ item.textEn }}</p>
              </div>
              <div class="content-box">
                <div class="look">
                  <i></i>
                  <span>{{ item.lookNum }}</span>
                </div>
                <div class="share-like">
                  <i></i>
                  <i></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="chair" v-if="navIndex == 2">
          <ul>
            <li v-for="item in chairArr" :key="item.id">
              <img :src="item.img" alt="" />
              <div class="content-text">
                <p>{{ item.text }}</p>
                <p>{{ item.textEn }}</p>
              </div>
              <div class="content-box">
                <div class="look">
                  <i></i>
                  <span>{{ item.lookNum }}</span>
                </div>
                <div class="share-like">
                  <i></i>
                  <i></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="adornment" v-if="navIndex == 3">
          <ul>
            <li v-for="item in adornmentArr" :key="item.id">
              <img :src="item.img" alt="" />
              <div class="content-text">
                <p>{{ item.text }}</p>
                <p>{{ item.textEn }}</p>
              </div>
              <div class="content-box">
                <div class="look">
                  <i></i>
                  <span>{{ item.lookNum }}</span>
                </div>
                <div class="share-like">
                  <i></i>
                  <i></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import findApi from "@/api/find/index";
export default {
  props: {},
  data() {
    return {
      navIndex: 0,
      // menu_index: 1,
      navArr: [
        {
          img: require("@/assets/imgs/icon/green-lamp.png"),
          imgActive: require("@/assets/imgs/icon/w-lamp.png"),
          id: 20
        },
        {
          img: require("@/assets/imgs/icon/green-closet.png"),
          imgActive: require("@/assets/imgs/icon/white-cabinet.png"),
          id: 21
        },
        {
          img: require("@/assets/imgs/icon/green-decoration.png"),
          imgActive: require("@/assets/imgs/icon/w-decorations.png"),
          id: 22
        },
        {
          img: require("@/assets/imgs/icon/green-chair.png"),
          imgActive: require("@/assets/imgs/icon/white-chair.png"),
          id: 23
        }
      ],
      lampArr: [
        {
          img: require("@/assets/imgs/find-article/lamp-1.png"),
          id: 30,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 6857
        },
        {
          img: require("@/assets/imgs/find-article/lamp-2.png"),
          id: 31,
          text: "现代极简吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-3.png"),
          id: 32,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-4.png"),
          id: 33,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-5.png"),
          id: 34,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        }
      ],
      cabinetArr: [
        {
          img: require("@/assets/imgs/find-article/lamp-5.png"),
          id: 40,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 6857
        },
        {
          img: require("@/assets/imgs/find-article/lamp-4.png"),
          id: 41,
          text: "现代极简吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-3.png"),
          id: 42,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-2.png"),
          id: 43,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-1.png"),
          id: 44,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        }
      ],
      chairArr: [
        {
          img: require("@/assets/imgs/find-article/lamp-3.png"),
          id: 51,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 6857
        },
        {
          img: require("@/assets/imgs/find-article/lamp-4.png"),
          id: 52,
          text: "现代极简吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-5.png"),
          id: 53,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-2.png"),
          id: 54,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-1.png"),
          id: 55,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        }
      ],
      adornmentArr: [
        {
          img: require("@/assets/imgs/find-article/lamp-4.png"),
          id: 51,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 6857
        },
        {
          img: require("@/assets/imgs/find-article/lamp-2.png"),
          id: 52,
          text: "现代极简吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-5.png"),
          id: 53,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-3.png"),
          id: 54,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        },
        {
          img: require("@/assets/imgs/find-article/lamp-1.png"),
          id: 55,
          text: "莲花吊灯",
          textEn: "Lotus droplight",
          lookNum: 17231
        }
      ]
    };
  },
  computed: {},
  created() {
    this.getSeriesList();
  },
  mounted() {},
  methods: {
    getSeriesList() {
      findApi.getSeriesList().then(res => {
        this.seriesList = res.data;
        console.log("系列列表", res);
      });
    },
    setTab(val, index) {
      this.navIndex = index;
      console.log(val, index);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.article-main {
  height: 100%;
  .wrap-c {
    width: 337px;
    height: 100%;
    margin: 0 auto;
  }
  .nav {
    height: 87px;
    width: 100%;
    background-color: #f0ebe6;
    border-radius: 20px 20px 0 0;
    margin-top: -23px;
    .nav-c {
      width: 258px;
      margin: 0 auto;
      // height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 50%;
        img {
          width: 21px;
          height: 24px;
        }
      }
      li.active {
        width: 49px;
        height: 49px;
        background: #354e44;
        img {
          width: 27px;
          height: 34px;
        }
      }
    }
  }
  .content {
    // height: 100%;
    padding-bottom: 116px;
    // height: 100%;
    .content-c {
      ul {
        // height: 241px;
        li {
          position: relative;
          border-radius: 12px;
          margin-bottom: 28px;
          width: 100%;
          height: 241px;
          background-color: #fff;
          img {
            height: 191px;
            width: 100%;
          }
          .content-text {
            color: #ffffff;
            position: absolute;
            top: 122px;
            left: 12px;
            font-size: 24px;
            text-align: start;
            line-height: 24px;
            letter-spacing: 1.71px;
            p:last-child {
              font-size: 15px;
            }
          }
          .content-box {
            width: 282px;
            height: 48px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .look {
              display: flex;
              i {
                display: block;
                background: url("../../../assets/imgs/icon/eye.png") no-repeat
                  center;
                margin-right: 8.6px;
                background-size: cover;
                width: 22px;
                height: 14px;
              }
            }
            .share-like {
              display: flex;
              i {
                width: 20px;
                height: 20px;
                display: block;
                background: url("../../../assets/imgs/icon/like.png") no-repeat
                  center;
                background-size: cover;
              }
              i:nth-child(2) {
                margin-left: 22px;
                background: url("../../../assets/imgs/icon/share-b.png")
                  no-repeat center;
                background-size: cover;
              }
            }
          }
        }
      }
    }
  }
}
</style>
