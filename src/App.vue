<template>
    <div id="app">
      <router-view></router-view>
      <TabBar v-show="$route.meta.showBottomTabBar"></TabBar>
    </div>
</template>

<script>
    import TabBar from './components/TabBar/TabBar'

    export default {
        name: "App",
      components : {
          TabBar
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background-color #f5f5f5

</style>
