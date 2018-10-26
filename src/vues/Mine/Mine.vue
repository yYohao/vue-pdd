<template>
    <div class="mine">
      <!-- 主面板 -->
      <div v-if="userInfo.id">
        主面板 
      </div>
      <select-login v-else />
    </div>
</template>

<script>
    import SelectLogin from '../Login/SelectLogin'
    import {mapState} from 'vuex'
    export default {
        name: "Mine",
        components:{
          SelectLogin
        },
        computed:{
          ...mapState(['userInfo'])
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.mine
  background #f5f5f5
  width: 100%
  height: 100%
</style>
