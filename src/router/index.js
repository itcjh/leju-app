import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/recommend/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: "*",
    redirect: "/home",
  },
  ///////////////        home页面
  {
    path: '/home',
    name: 'home',
    redirect: "/home/recommend",
    component: () => import("../views/home/index.vue"),
    meta: {
      footerBar: true
    },
    children: [{
        path: "recommend",
        name: "recommend",
        component: Home,
        meta: {
          footerBar: true
        },
      },
      {
        path: "brand",
        name: "brand",
        component: () => import("../views/home/brand/index.vue"),
        meta: {
          footerBar: true
        },
      },
    ]
  },
  /////////////          搜索页面
  {
    path: "/search",
    name: "search",
    component: () => import("../views/home/search/index.vue"),
    meta: {
      footerBar: false
    }
  },



  ///////////////        分类页面
  {
    path: '/classification',
    name: 'classification',
    component: () => import( /* webpackChunkName: "about" */ '../views/classification/index.vue'),
    meta: {
      footerBar: true
    },
  },
  /////////////////////////          创意家具
  {
    path: "/creative",
    name: "creative",
    component: () => import('../views/classification/creative/index.vue'),
  },
  //////////////////////           分类详情页
  {
    path: "/classDetails/:id",
    name: "classDetails",
    component: () => import('../views/classification/classDetails/index.vue'),
  },
  ///////////////////////         购物车
  {
    path: "/car",
    name: "car",
    component: () => import('../views/classification/car/index.vue'),
  },




  ///////////      /////////   发现
  {
    path: '/findings',
    name: 'findings',
    redirect: "/findings/article",
    component: () => import('../views/findings/index.vue'),
    meta: {
      footerBar: true
    },
    children: [{
        ////    ///////////       精选文章
        path: 'article',
        name: 'article',
        component: () => import('../views/findings/article/index.vue'),
        meta: {
          footerBar: true
        },
      },
      ////    ///////////       好物推荐
      {
        path: 'commendation',
        name: 'commendation',
        component: () => import( /* webpackChunkName: "about" */ '../views/findings/commendation/index.vue'),
        meta: {
          footerBar: true
        },
      }
    ]
  },
  /////////////              发现的详情
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/findings/article/detail/index.vue'),
  },
  //////////////////          好物推荐详情
  {
    path: '/goodDetail',
    name: "goodDetail",
    component: () => import('../views/findings/commendation/goodDetail/index.vue'),
  },




  /////////////////////        我的
  {
    path: '/mine',
    name: 'mine',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/index.vue'),
    meta: {
      footerBar: true
    },
  },
  // 订单
  {
    path: '/order/:id',
    name: 'order',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/order/index.vue')

  },
  // 售后
  {
    path: '/afterSale',
    name: 'afterSale',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/afterSale/index.vue')

  },
  // 收藏
  {
    path: '/like',
    name: 'like',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/like/index.vue')

  },
  // 文章
  {
    path: '/article',
    name: 'article',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/article/index.vue')

  },

  // 品牌
  {
    path: '/branded',
    name: 'branded',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/branded/index.vue')

  },
  // 地址
  {
    path: '/address',
    name: 'address',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/address/index.vue')

  },
  // 卡包
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/wallet/index.vue')

  },
  // 账户与安全
  {
    path: '/save',
    name: 'save',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/save/index.vue')

  },
  // 关于
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/about/index.vue')

  },
  // 遮罩层 暂用
  {
    path: '/mask',
    name: 'mask',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/mask/index.vue')

  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine/register/index.vue')
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router