<template>
  <div class="findings-main">
    <div
      class="header"
      :class="$route.name == 'commendation' ? 'commendation' : ''"
    >
      <div class="navigation">
        <router-link class="router-link" to="/findings/article"
          >精选文章</router-link
        >
        <router-link class="router-link" to="/findings/commendation"
          >好物推荐</router-link
        >
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.$route.meta);
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.findings-main {
  height: 100%;
  .header {
    // position: absolute;
    // top: 0;
    width: 100%;
    height: 103px;
    background: #354e44;
    .navigation {
      height: 103px;
      display: flex;
      align-items: center;
      justify-content: center;
      .router-link {
        font-size: 16px;
        color: #ffffff;
        margin: 0 12px;
        position: relative;
      }
      .router-link-active::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: -10px;
        width: 32px;
        height: 3px;
        background: #ffffff;
        border-radius: 1.5px;
      }
    }
  }
  .commendation {
    position: absolute;
    z-index: 999;
    top: 0;
    background: transparent;
  }
}
</style>
