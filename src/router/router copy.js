/* eslint-disable */
import Router from 'vue-router'

import routes from './routes'

// 不推荐这么使用，因为这样每次在全局 import 这个 router 的时候，引入的都是同一个 router，如果需要每次引入的时候新创建一个 router，这种方式是做不到的。(和 return data 一样)
const router = new Router({
  routes
})
export default router

// 为什么要这么做？
// 因为项目需要服务端渲染，服务端渲染的时候，只 export default router 会导致内存溢出的问题。export default 出去的只有一个 router，每次服务端渲染都会重新生成一个新的 app，由于 router 只有一个对象，导致会缓存新建的 app，在服务端渲染流程结束后，app 没有释放，导致内存没有下降，一直在一个很高的点。随着内存逐渐累加，导致内存溢出。（服务端渲染部分再深入讲解）
export default () => {
  return new Router({
    routes,
  })
}
