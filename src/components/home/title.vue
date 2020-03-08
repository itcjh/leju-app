<template>
  <div class="title">
    <div class="title-c">
      <p>{{ text }}</p>
      <div>
        <span>更多</span>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleTl",
  props: {
    text: String
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
.title-c {
  display: flex;
  width: 352px;
  height: 22px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 16px;
    color: #3e3e3e;
    letter-spacing: 1.14px;
    font-weight: bold;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 34px;
    color: #8c8c8c;
    font-size: 13px;
    i {
      display: block;
      width: 6px;
      height: 13px;
      background: url("../../assets/imgs/icon/right.png") no-repeat center;
      background-size: cover;
    }
  }
}
</style>
