import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import createRouter from './router/router'

Vue.config.productionTip = false

Vue.use(VueRouter) // 使用 VueRouter 插件
const router = createRouter() // 创建 router 对象

new Vue({
  router, // 通过 router 配置参数注入路由，从而让整个应用都有路由功能。
  // 通过在根节点 vue 实例 上 挂载 router 对象，使每个组件都能拿到这个 router 对象，从而让整个应用都有路由功能。（VueRouter内部实现此功能）
  render: h => h(App),
}).$mount('#app')
