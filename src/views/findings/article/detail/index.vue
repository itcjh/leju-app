<template>
  <div class="detail-main">
    <div class="header">
      <img src="../../../../assets/imgs/find-article/header.png" alt="" />
      <div class="backing-out" @click="back"></div>
      <!-- <router-link tag="div" to="go(-1)" class="backing-out"></router-link> -->
      <div class="share"></div>
      <div class="love">
        <i></i>
      </div>
    </div>
    <div class="content">
      <div class="content-c wrap-c">
        <titleFind></titleFind>
        <div class="version">
          <div class="carving">
            <p>手工雕刻 材质细腻</p>
            <p>
              由英国顶尖设计师MacMaster——木质莲花灯罩，匠心由光阴成就，也馈赠出不负岁月的作品。木质莲花灵动曼妙的形态，清新自然，每个细节都可放大品味。
            </p>
          </div>
          <div class="lemp">
            <div class="version-lemp">
              <img
                src="../../../../assets/imgs/find-article/article-2.png"
                alt=""
              />
            </div>
            <div class="lemp-text">
              由英国顶尖设计师MacMaster——木质莲花灯罩，匠心由光阴成就，也馈赠出不负岁月的作品。木质莲花灵动曼妙的形态，清新自然，每个细节都可放大品味。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="picture">
        <img src="../../../../assets/imgs/find-article/article-1.png" alt="" />
      </div>
      <div class="footer-c wrap-c">
        <div class="footer-box">
          <div class="information">
            <span>1028</span>
            <i></i>
          </div>
          <div class="collect">
            <span>458</span>
            <i></i>
          </div>
          <div class="like">
            <span>781</span>
            <i></i>
          </div>
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
  mounted() {
    console.log(this.$route.params.id);
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  components: {
    titleFind
  }
};
</script>

<style scoped lang="scss">
.detail-main {
  .wrap-c {
    width: 311px;
    height: 100%;
    margin: 0 auto;
  }
  .header {
    position: relative;
    height: 317px;
    // width: 100%;
    img {
      width: 100%;
      height: 317px;
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
        background: url("../../../../assets/imgs/icon/heart.png") no-repeat
          center;
        background-size: cover;
      }
    }
  }
  .content {
    // margin-top: 42px;
    .version {
      margin-top: 44px;
      font-size: 14px;
      color: #3e3e3e;
      text-align: start;
      .carving {
        margin-bottom: 35px;
        p:nth-child(1) {
          font-weight: bolder;
        }
        p:nth-child(2) {
          margin-top: 8px;
          color: #8a8a8a;
          line-height: 18px;
        }
      }
      .lemp {
        display: flex;
        justify-content: space-between;
        height: 180px;
        .version-lemp {
          width: 160px;
          height: 106px;
          // background: url("../../../../assets/imgs/find-article/article-2.png")
          //   no-repeat center;
          // background-size: cover;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .lemp-text {
          width: 121px;
          font-size: 14px;
          color: #8a8a8a;
          line-height: 20px;
        }
      }
    }
  }
  .footer {
    overflow: hidden;
    margin-bottom: 25px;
    .picture {
      margin: 28px 0 52px;
      img {
        width: 100%;
        height: 201px;
      }
    }
    .footer-c {
      .footer-box {
        height: 20px;
        display: flex;
        float: right;
        font-size: 14px;
        color: #3e3e3e;

        i {
          width: 20px;
          height: 20px;
          display: block;
          background: url("../../../../assets/imgs/icon/comment.png") no-repeat
            center;
          background-size: cover;
        }
        span {
          margin-top: 5px;
          margin-right: 12px;
        }
        .information {
          display: flex;
          align-items: center;
        }
        .collect {
          display: flex;
          align-items: center;
          margin: 0 20px;
          i {
            background: url("../../../../assets/imgs/icon/collection.png")
              no-repeat center;
            background-size: cover;
          }
        }
        .like {
          display: flex;
          align-items: center;
          i {
            background: url("../../../../assets/imgs/icon/like.png") no-repeat
              center;
            background-size: cover;
          }
        }
      }
    }
  }
}
</style>
