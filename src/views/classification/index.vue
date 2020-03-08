<template>
  <div class="classification-main">
    <div class="header">
      <div class="header-c">
        <div class="tips">
          <div class="message"></div>
          <div class="right">
            <router-link to="/search" tag="div" class="search"></router-link>
            <!-- <div class="search"></div> -->
            <router-link to="/car" tag="div" class="shopping"></router-link>
            <!-- <div class="shopping"></div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-c">
        <div
          tag="div"
          class="originality"
          to="/creative"
          v-for="item in kindLists"
          :key="item.id"
          @click="go(item)"
        >
          <img :src="`http://bufan.cloud/${item.img}`" alt="" />
          <div class="title">
            <p>{{ item.ctitle }}</p>
            <span>{{ item.etitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import kindApi from "@/api/kind/index";
import { log } from "util";
export default {
  props: {},
  data() {
    return {
      kindLists: []
    };
  },
  computed: {},
  created() {
    this.getKindsList();
  },
  mounted() {},
  methods: {
    getKindsList() {
      kindApi.getKindsList().then(res => {
        this.kindLists = res.data;
        console.log("分类列表", res);
      });
    },
    go(val) {
      // console.log(val.id);
      this.$router.push({
        path: "/creative",
        query: {
          id: val.id
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.classification-main {
  .header {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 140px;
    background-color: #354e44;
    .header-c {
      width: 335px;
      height: 100%;
      margin: 44px auto;
      .tips {
        display: flex;
        justify-content: space-between;
        .message {
          width: 21px;
          height: 21px;
          background: url("../../assets/imgs/icon/message.png") no-repeat center;
          background-size: cover;
        }
        .right {
          display: flex;
          .search {
            width: 18px;
            height: 18px;
            margin-right: 18px;
            background: url("../../assets/imgs/icon/search.png") no-repeat
              center;
            background-size: cover;
          }
          .shopping {
            width: 17px;
            height: 15px;
            background: url("../../assets/imgs/icon/shopping.png") no-repeat
              center;
            background-size: cover;
          }
        }
      }
    }
  }
  .content {
    // z-index: 100;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #f0ebe6;
    position: absolute;
    left: 0;
    top: 82px;
    padding-bottom: 88px;
    .content-c {
      margin: 32px auto;
      display: flex;
      flex-wrap: wrap;
      width: 335px;
      .originality {
        position: relative;
        margin-bottom: 24px;
        width: 335px;
        height: 151px;
        border-radius: 10px;

        .title {
          position: absolute;
          left: 26px;
          top: 74px;
          text-align: left;
          font-size: 24px;
          color: #3e3e3e;
          margin-bottom: 4px;
          p {
            font-weight: bold;
          }
          span {
            font-size: 15px;
            color: #7f7f7f;
          }
        }
      }
      .originality:nth-child(4n) {
        width: 156px;
        height: 221px;
        .title {
          position: absolute;
          left: 26px;
          top: 115px;
        }
        img {
          margin: 0;
          width: 100%;
          height: 100%;
        }
      }
      .originality:nth-child(4n-1) {
        margin-right: 23px;
        width: 156px;
        height: 221px;
        .title {
          position: absolute;
          left: 26px;
          top: 115px;
        }
        img {
          margin: 0;
          width: 100%;
          height: 100%;
        }
      }

      .originality {
        background-color: #fff;
        img {
          margin-left: 127px;
          width: 208px;
          height: 100%;
        }
      }
    }
  }
}
</style>
