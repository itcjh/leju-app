import Vue from 'vue'
import Vuex from 'vuex'
import brand from '@/store/modules/home/brand/index.js'
import home from "./modules/home/index.js"
import user from './modules/user/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    brand: brand,
    home: home,
    user: user
  }
})