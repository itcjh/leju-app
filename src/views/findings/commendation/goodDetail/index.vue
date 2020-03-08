<template>
  <div class="goodDetail">
    <div class="header">
      <img src="../../../../assets/imgs/find-recommend/detail-top.png" alt="" />
      <router-link
        tag="div"
        to="/findings/commendation"
        class="backing-out"
      ></router-link>
      <div class="share"></div>
      <div class="love">
        <i></i>
      </div>
    </div>
    <div class="content">
      <div class="content-c wrap-c">
        <titleFind></titleFind>
        <div class="text">
          轻北欧风个性与舒适并存，干净简洁的切合拼合外观，时尚简约。切割外观，置于居室增添一抹亮丽风景。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleFind from "../../../../components/findings/title";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {
    titleFind
  }
};
</script>

<style scoped lang="scss">
.wrap-c {
  width: 302px;
  height: 100%;
  margin: 0 auto;
}
.header {
  position: relative;
  height: 522px;
  width: 100%;
  img {
    height: 100%;
  }
  .backing-out {
    position: absolute;
    top: 44px;
    left: 20px;
    width: 12px;
    height: 20px;
    background: url("../../../../assets/imgs/icon/left.png") no-repeat center;
    background-size: cover;
  }
  .share {
    position: absolute;
    top: 44px;
    right: 20px;
    width: 22px;
    height: 22px;
    background: url("../../../../assets/imgs/icon/share.png") no-repeat center;
    background-size: cover;
  }
  .love {
    position: absolute;
    bottom: -25px;
    right: 49px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #354e44;
    i {
      display: block;
      margin: 14.5px auto;
      width: 24px;
      height: 21px;
      background: url("../../../../assets/imgs/icon/shopping.png") no-repeat
        center;
      background-size: cover;
    }
  }
}
.content {
  // margin-top: 42px;
  margin-bottom: 88px;
  .text {
    margin-top: 28px;
    line-height: 20px;
    text-align: start;
    font-size: 14px;
    color: #8a8a8a;
  }
}
</style>
