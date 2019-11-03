<template>
  <div id="app">
    <!-- <router-link to="/login">去Login页</router-link>&nbsp; -->
    <!-- 这里 name 传入的是 json 对象，希望 vue 去解析它而不是当做字符串处理，所以需要使用 v-bind 进行数据绑定-->
    <!-- <router-link :to="{name: 'login'}">去Login页（name 形式）</router-link> -->
    <!-- <router-link to="/home">去Home页</router-link> -->
    <!-- <router-link to="/home/extract">去Home页2</router-link> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  mounted () {
    console.log(this)
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
</style>
