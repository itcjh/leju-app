<template>
  <div class="address-main">
    <div class="header">
      <Header text="收货地址"></Header>
    </div>
    <div class="content">
      <div class="content-c">
        <div class="brand-info" v-for="item in addressInfo" :key="item.id">
          <div class="img-info">
            <div class="surname">{{ item.surname }}</div>
            <div class="text">
              <div class="img-name">{{ item.name }}</div>
              <p class="address">地址: {{ item.address }}</p>
              <p class="tel">联系方式: {{ item.tel }}</p>
            </div>
            <div class="edit">编辑</div>
          </div>
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
      addressInfo: [
        {
          id: 131,
          surname: "勿",
          name: "勿二君",
          address: "湖南省长沙市镇北街",
          tel: "1328394722"
        },
        {
          id: 132,
          surname: "叶",
          name: "叶小飞",
          address: "河南省郑州市金水区80号",
          tel: "1527364527"
        },
        {
          id: 133,
          surname: "韩",
          name: "韩立",
          address: "河南省郑州市郑东新区60号",
          tel: "1837264829"
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
.address-main {
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
      margin: 30px auto;
      .brand-info {
        display: flex;
        align-items: center;
        overflow: hidden;
        width: 100%;
        height: 104px;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 12px;

        .img-info {
          display: flex;
          align-items: center;
          width: 90%;
          height: 70px;
          margin-left: 18px;
          .surname {
            width: 41px;
            height: 41px;
            background-color: #354e44;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            line-height: 41px;
          }
          .text {
            margin-left: 13px;
            margin-right: 67px;
            color: #3e3e3e;

            .img-name {
              font-size: 16px;
              font-weight: bold;
              margin-bottom: 3px;
              text-align: left;
            }
            .address {
              margin-bottom: 3px;
              text-align: left;
              font-size: 11px;
              color: #8d8d8d;
            }
            .tel {
              margin-bottom: 3px;
              text-align: left;
              font-size: 11px;
              color: #8d8d8d;
            }
          }
          .edit {
            font-size: 13px;
            color: #8d8d8d;
            width: 40px;
            height: 18px;
            border-left: 1px solid #979797;
            text-align: right;
            line-height: 18px;
            opacity: 0.35;
          }
        }
      }
    }
  }
}
</style>
