<template>
  <div class="brand-main">
    <div class="headers">
      <img src="../../../assets/imgs/home/nav-bg.png" alt="" />
    </div>
    <div class="content">
      <div class="content-c">
        <div class="content-img" v-for="item in contentImgs" :key="item.id">
          <img :src="item.img" alt="" />
          <div class="bg"></div>
          <div class="avatar">
            <div class="avatar-item" v-for="i in item.avatar" :key="i.id">
              <img :src="i.img" alt="" />
            </div>
          </div>
          <div class="detail">
            <p>{{ item.p }}</p>
            <span>{{ item.span }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      contentImgs: function(state) {
        console.log(state);
        return state.brand.contentImgs;
      }
    })
  },
  created() {
    console.log(this.$store);
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.brand-main {
  .headers {
    width: 375px;
    height: 258px;
    margin-top: -152px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    img {
      width: 100%;
    }
    // background: url("../../../assets/imgs/home/nav-bg.png") no-repeat center;
    // background-position: center -155px;
  }
  .content {
    width: 100%;
    height: 100%;
    margin-top: 34px;
    .content-c {
      width: 335px;
      height: 100%;
      margin: 0 auto;
      .content-img {
        position: relative;
        width: 100%;
        height: 306px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #fff;
        margin-bottom: 28px;
        img {
          width: 100%;
          height: 213px;
        }
        .bg {
          width: 18px;
          height: 18px;
          position: absolute;
          left: 30px;
          bottom: 86px;
          border-radius: 50%;
          background-color: #354e44;
        }
        .avatar {
          position: absolute;
          right: 30px;
          bottom: 75px;
          display: flex;
          // position: relative;
          .avatar-item {
            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
          }
        }
        .detail {
          margin-top: 28px;
          margin-left: 28px;
          line-height: 22px;
          text-align: left;
          p {
            font-size: 16px;
            color: #3e3e3e;
            // font-family: PingFangSC-Semibold;
          }
          span {
            font-size: 11px;
            color: #b1b1b1;
          }
        }
      }
    }
  }
}
</style>
