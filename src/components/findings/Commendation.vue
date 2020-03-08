<template>
  <div>
    <div class="title">
      <div class="title-c wrap-c">
        <p>{{ textEn }}</p>
        <p>{{ text }}</p>
      </div>
    </div>
    <div class="region">
      <div class="region-c wrap-c">
        <div class="high">
          <p>高度</p>
          <p class="region-num">{{ hight }}</p>
        </div>
        <div class="area">
          <p>区域</p>
          <p class="region-num">{{ area }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commendation",
  props: {
    textEn: String,
    text: String,
    hight: String,
    area: String
  },
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
.wrap-c {
  width: 331px;
  margin: 0 auto;
}
.title {
  margin-top: 86px;
  color: #ffffff;
  font-size: 13px;
  text-align: start;
  .title-c {
    width: 155px;
    margin-left: 22px;
    p:nth-child(2) {
      font-size: 36px;
      letter-spacing: 2.57px;
      line-height: 44px;
    }
  }
}
.region {
  margin-top: 39px;
  .region-c {
    // float: right;
    font-size: 14px;
    color: #ffffff;
    display: flex;
    justify-content: flex-end;
    .high {
      margin-right: 42px;
    }
    .region-num {
      margin-top: 7px;
      font-size: 20px;
    }
  }
}
</style>
