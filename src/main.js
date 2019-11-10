/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import createRouter from './router/router'

Vue.config.productionTip = false

Vue.use(VueRouter) // 使用 VueRouter 插件
const router = createRouter() // 创建 router 对象

router.beforeEach((to, from, next) => {
  console.log('main beforeEach invoked')
  // if (to.fullPath !== '/login') {
  //   next({ path: '/login' })
  // } else {
  //   next() // 执行 next 后路由才会被跳转
  // }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('main beforeResolve invoked')
  next()
})

router.afterEach((to, from) => { // 每次导航跳转结束后被触发，因为已经跳转，所以不再需要 next
  console.log('main afterEach invoked')
})

new Vue({
  router, // 通过 router 配置参数注入路由，从而让整个应用都有路由功能。
  // 通过在根节点 vue 实例 上 挂载 router 对象，使每个组件都能拿到这个 router 对象，从而让整个应用都有路由功能。（VueRouter内部实现此功能）
  render: h => h(App)
}).$mount('#app')
