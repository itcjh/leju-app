<template>
  <div class="header-info">
    <div class="left" @click="goBack"></div>
    <div class="title">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    text: String
  },
  data() {
    return {};
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
.header-info {
  margin-top: 44px;
  display: flex;
  justify-content: space-around;

  .left {
    margin-left: 10px;
    width: 12px;
    height: 19px;
    background: url("../../assets/imgs/icon/left.png") no-repeat center;
    background-size: cover;
  }
  .title {
    flex: 1;
    text-align: center;
    font-size: 17px;
    color: #fff;
  }
}
</style>
