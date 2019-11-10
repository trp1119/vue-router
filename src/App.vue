<template>
  <div id="app">
    <router-link to="/login/123">Login123</router-link>
    <router-link to="/login/456">Login456</router-link>
    <router-link to="/login">去Login页</router-link>
    <router-link to="/login/loginChild">去LoginChild页</router-link>
    <!-- 这里 name 传入的是 json 对象，希望 vue 去解析它而不是当做字符串处理，所以需要使用 v-bind 进行数据绑定-->
    <router-link :to="{name: 'login'}">去Login页（name 形式）</router-link>
    <router-link to="/home">去Home页</router-link>
    <router-link to="/home/exact">去Home/exact页</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <br />
    <router-view name="myRouteView"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter .fade-leave-to {
  opacity: 0;
}
</style>
