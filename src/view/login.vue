
<template>
  <div>
    <div>Login页内容</div>
    <router-view />
  </div>
</template>

<script>
  export default {
    props: ['id', 'sex'],
    mounted () {
      console.log(this.id, this.sex)
    },
    beforeRouteEnter (to, from, next) { // eslint-disable-line
      console.log("component beforeRouteEnter")
      next(vm => {
        console.log(this)
        console.log(vm)
      })
    },
    beforeRouteUpdate (to, from, next) { // eslint-disable-line
      console.log("component beforeRouteUpdate")
      next()
    },
    beforeRouteLeave (to, from, next) { // eslint-disable-line
      console.log("component beforeRouteLeave")
      next()
    }
  }
</script>

<style>

</style>