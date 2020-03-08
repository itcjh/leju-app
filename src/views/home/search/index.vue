<template>
  <div class="main">
    <div class="header">
      <div class="header-c wrap-c">
        <div class="ipt">
          <input type="text" placeholder="搜索" />
          <i></i>
        </div>
        <!-- <router-link to="go(-1)" tag="span">
          取消
        </router-link> -->
        <span @click="goBack">取消</span>
      </div>
    </div>
    <div class="content">
      <div class="content-c wrap-c">
        <div class="title">热门搜索</div>
        <ul class="search-img">
          <li v-for="item in searchImgs" :key="item.id">
            <img :src="item.img" alt="" />
            <p>{{ item.text }}</p>
          </li>
        </ul>
        <div class="title record">搜索记录</div>
        <ul class="record-text">
          <li v-for="item in serchTexts" :key="item.id">{{ item.text }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      searchImgs: [
        {
          img: require("@/assets/imgs/icon/chair.png"),
          id: 1,
          text: "椅子"
        },
        {
          img: require("@/assets/imgs/icon/wardrobe.png"),
          id: 2,
          text: "衣柜"
        },
        {
          img: require("@/assets/imgs/icon/lamp.png"),
          id: 3,
          text: "灯具"
        },
        {
          img: require("@/assets/imgs/icon/wardrobe.png"),
          id: 4,
          text: "衣柜"
        },
        {
          img: require("@/assets/imgs/icon/decoration.png"),
          id: 5,
          text: "装饰品"
        },
        {
          img: require("@/assets/imgs/icon/chair.png"),
          id: 6,
          text: "椅子"
        }
      ],
      serchTexts: [
        {
          text: "椅子",
          id: 10
        },
        {
          text: "木灯",
          id: 11
        },
        {
          text: "鞋架",
          id: 12
        },
        {
          text: "灯具",
          id: 13
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.main {
  .wrap-c {
    width: 333px;
    margin: 0 auto;
    height: 100%;
  }
  .header {
    .header-c {
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .ipt {
        position: relative;
        input {
          width: 224px;
          height: 33px;
          padding-left: 48px;
          border-radius: 32px;
          font-size: 12px;
          color: #6c6c6c;
          background: #ffffff;
          outline: none;
          border: none;
        }
        i {
          position: absolute;
          top: 8.5px;
          left: 18px;
          width: 18px;
          height: 18px;
          background: url("../../../assets/imgs/icon/searchs.png") no-repeat
            center;
          background-size: cover;
        }
      }

      span {
        font-size: 14px;
        color: #3e3e3e;
      }
    }
  }
  .content {
    margin-top: 30px;
    .content-c {
      .title {
        font-size: 16px;
        color: #3e3e3e;
        letter-spacing: 1.14px;
        text-align: start;
      }
      .search-img {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          margin: 24px 0 0;
          width: 96px;
          height: 96px;
          background: #fff;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 27px;
            height: 34px;
          }
          p {
            margin-top: 7px;
          }
        }
      }
      .record {
        margin-top: 25px;
      }
      .record-text {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 96px;
          height: 43px;
          background: #fff;
          border-radius: 7px;
          margin-top: 24px;
          line-height: 43px;
          font-size: 13px;
          color: #3e3e3e;
        }
      }
    }
  }
}
</style>
