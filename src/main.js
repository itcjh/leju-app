import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入移动端适配
import 'lib-flexible'
// 初始化css样式
import "@/assets/css/common/reset.css"
Vue.config.productionTip = false

import {
  Button
} from 'vant';
import {
  Toast,
} from 'vant';
Vue.use(Button).use(Toast, )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')