<template>
  <div class="creative-main">
    <div class="header">
      <div class="title">
        <i @click="back"></i>
        <p>创意家具</p>
      </div>
      <div class="nav">
        <ul>
          <!-- <li
            :class="
              `${index == navIndex ? 'active' : ''} ${
                navIndex == '1' || navIndex == '2' ? 'active1' : ''
              }`
            "
            v-for="(item, index) in navArr"
            :key="index"
            @click="setTab(item, index)"
          >
            {{ item }}
          </li> -->
          <li
            :class="[{ 'option-item': true }, { active: navIndex == 1 }]"
            @click="go(1)"
          >
            新品
          </li>
          <li
            :class="[
              { 'option-item': true },
              { active: navIndex == 2 },
              { up: cont == 1 },
              { down: cont == 2 }
            ]"
            @click="go(2)"
          >
            销量
          </li>
          <li
            :class="[
              { 'option-item': true },
              { active: navIndex == 3 },
              { up: cont == 3 },
              { down: cont == 4 }
            ]"
            @click="go(3)"
          >
            价格
          </li>
          <li
            :class="[{ 'option-item': true }, { active: navIndex == 4 }]"
            @click="go(4)"
          >
            筛选
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="content-c wrap-c">
        <ul class="list">
          <router-link
            tag="li"
            :to="`/classDetails/${index}`"
            class="item"
            v-for="(item, index) in goodsList"
            :key="item.id"
          >
            <!-- <li class="item" v-for="(item, index) in creativeArr" :key="index"> -->
            <img :src="`http://bufan.cloud/${item.coverImg}`" alt="" />
            <div class="detail">
              <div class="detail-c">
                <p>{{ item.gname }}</p>
                <p>{{ item.descr }}</p>
                <div class="detail-demo">
                  <span class="price">{{ item.priceOut }}</span>
                  <span class="address">{{ item.pOriginCity }}</span>
                </div>
              </div>
            </div>
            <!-- </li> -->
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import goodsApi from "@/api/goods/index";

export default {
  props: {},
  data() {
    return {
      cont: 0,
      goodsList: [],
      navIndex: 1,
      navArr: ["新品", "销量", "价格", "筛选"],
      creativeArr: [
        {
          img: require("@/assets/imgs/classification-furniture/banner-1.png"),
          title: "Valley 单人沙发",
          textEn: "1426人以收藏",
          price: "¥560",
          address: "佛山"
        },
        {
          img: require("@/assets/imgs/classification-furniture/banner-2.png"),
          title: "Valley 单人沙发",
          textEn: "1426人以收藏",
          price: "¥560",
          address: "佛山"
        },
        {
          img: require("@/assets/imgs/classification-furniture/banner-3.png"),
          title: "Valley 单人沙发",
          textEn: "1426人以收藏",
          price: "¥560",
          address: "佛山"
        },
        {
          img: require("@/assets/imgs/classification-furniture/banner-4.png"),
          title: "Valley 单人沙发",
          textEn: "1426人以收藏",
          price: "¥560",
          address: "佛山"
        },
        {
          img: require("@/assets/imgs/classification-furniture/banner-5.png"),
          title: "Valley 单人沙发",
          textEn: "1426人以收藏",
          price: "¥560",
          address: "佛山"
        },
        {
          img: require("@/assets/imgs/classification-furniture/banner-6.png"),
          title: "Valley 单人沙发",
          textEn: "1426人以收藏",
          price: "¥560",
          address: "佛山"
        }
      ]
    };
  },
  computed: {},
  created() {
    // console.log(this.$route.query.id);
    this.init();
  },
  mounted() {},
  methods: {
    // 切换状态
    // setTab(val, index) {
    //   this.navIndex = index;
    // },

    init() {
      goodsApi
        .getGoodsList({
          kindId: this.$route.query.id
        })
        .then(res => {
          this.goodsList = res.data.list;
          console.log(res.data);
        });
    },
    go(val) {
      if (this.navIndex != val) {
        this.cont = 0;
      }
      if (val == 2) {
        this.cont = this.cont == 1 ? 2 : 1;
      }
      if (val == 3) {
        this.cont = this.cont == 3 ? 4 : 3;
      }
      this.navIndex = val;
    },
    // 返回上一级路由
    back() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.wrap-c {
  width: 335px;
  height: 100%;
  margin: 0 auto;
}
.header {
  height: 167px;
  background: #354e44;
  overflow: hidden;

  .title {
    font-size: 17px;
    color: #ffffff;
    position: absolute;
    top: 44px;
    left: 0;
    display: flex;
    // justify-content: center;
    align-items: center;
    i {
      margin-left: 20px;
      margin-right: 118px;
      display: block;
      width: 12px;
      height: 19px;
      background: url("../../../assets/imgs/icon/left.png") no-repeat center;
      background-size: cover;
    }
  }
  .nav {
    font-size: 15px;
    color: #ffffff;
    overflow: hidden;
    ul {
      // height: 21px;
      line-height: 21px;
      width: 282px;
      margin: 89px auto 0;
      display: flex;
      justify-content: space-between;
      .option-item {
        position: relative;
        height: 28px;
      }
      .option-item.active.up::after {
        content: "";
        position: absolute;
        top: 5px;
        width: 10px;
        height: 10px;
        background: url("../../../assets/imgs/icon/top.png") no-repeat center;
        background-size: cover;
      }
      .option-item.active.down::after {
        content: "";
        position: absolute;
        top: 5px;
        width: 10px;
        height: 10px;
        background: url("../../../assets/imgs/icon/bottom.png") no-repeat center;
        background-size: cover;
      }
      .option-item.active::before {
        content: "";
        width: 100%;
        position: absolute;
        z-index: 666;
        top: 25px;
        height: 3px;
        border-radius: 5px 5px 0 0;
        background: #ffffff;
      }
    }
  }
}
.content {
  margin-top: -50px;
  background-color: #f0ebe6;
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .list {
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      margin-bottom: 24px;
      width: 158px;
      height: 208px;
      background: #ffffff;
      border-radius: 5px;
      img {
        width: 158px;
        height: 119px;
      }
      .detail {
        .detail-c {
          width: 122px;
          margin: 0 auto;
          height: 100%;
          text-align: start;
          font-size: 13px;
          color: #3e3e3e;
          p:nth-child(1) {
            margin-top: 14px;
            font-weight: bold;
          }
          p:nth-child(2) {
            margin: 10px 0 12px;
            font-size: 11px;
            color: #8d8d8d;
          }
          .detail-demo {
            display: flex;
            justify-content: space-between;
            .price {
              font-weight: bold;
            }
            .address {
              font-size: 11px;
            }
          }
        }
      }
    }
  }
}
</style>
