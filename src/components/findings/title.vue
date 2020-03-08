<template>
  <div class="title">
    <p>莲花吊灯</p>
    <p>by MacMaster</p>
    <div class="title-box">
      <div class="title-demo">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="price">
        <span>¥</span>
        <span>560</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleFind",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.title {
  margin-top: 42px;
  text-align: start;
  p:nth-child(1) {
    font-size: 18.2px;
    font-weight: bold;
    color: #3e3e3e;
    letter-spacing: 1.3px;
  }
  p:nth-child(2) {
    margin: 4px 0 9px;
    font-size: 15.4px;
    color: #b0b0b0;
    letter-spacing: 1.1px;
  }
  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-demo {
      display: flex;
      span {
        display: block;
        border-radius: 50%;
        margin-right: 6px;
        width: 14px;
        height: 14px;
        background: #663725;
      }
      span:nth-child(2) {
        background: #9f4405;
      }
      span:nth-child(3) {
        background: #cb821b;
      }
    }
    .price {
      font-size: 18px;
      color: #3e3e3e;
      letter-spacing: 1.3px;
    }
  }
}
</style>
