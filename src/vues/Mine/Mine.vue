<template>
    <div class="mine">
      <select-login />
    </div>
</template>

<script>
    import SelectLogin from '../Login/SelectLogin'
    export default {
        name: "Mine",
        components:{
          SelectLogin
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.mine
  background #f5f5f5
  width: 100%
  height: 100%
</style>
