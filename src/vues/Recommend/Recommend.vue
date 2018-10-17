<template>
    <div class="recommend-container" v-if="recommendshoplist.length > 0">
      <ul class="recommend">
        <ShopList
          tag="li"
          v-for="(item, index) in recommendshoplist"
          :item = item
          :key="index"
        />
      </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ShopList from './../../components/ShopList/ShopList'
    export default {
        name: "Recommend",
        mounted(){
          this.$store.dispatch('reqRecShopList');
        },
        computed:{
          ...mapState(['recommendshoplist'])
        },
        components: {
          ShopList
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-container
    background #f5f5f5
    width 100%
    height 100%
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background-color #f5f5f5
      margin-bottom 50px

      /*.recommend-item:nth-child(2n-1)*/
        /*margin-right 1%*/
      /*.recommend-item*/
        /*width 49.5%*/
        /*background #fff*/
        /*padding-bottom 15px*/
        /*margin-bottom 15px*/
        /*img*/
          /*width 100%*/
        /*.item-title*/
          /*font-weight lighter*/
          /*line-height 20px*/
          /*font-size 13px*/
          /*overflow hidden*/
          /*height 20px*/
          /*margin 5px 0*/
          /*padding 0 5px*/
        /*.item-bottom*/
          /*display flex*/
          /*flex-direction row*/
          /*align-items center*/
          /*padding 0 6px*/
          /*.item-price*/
            /*flex 2*/
            /*color red*/
            /*font-weight bolder*/
            /*font-size 12px*/
          /*.item-count*/
            /*flex 4*/
            /*font-size 10px*/
            /*color #666*/
          /*button*/
            /*border 1px solid orangered*/
            /*flex 2*/
            /*height 22px*/
            /*width 80%*/
            /*background-color: transparent*/
            /*color red*/
            /*font-size 10px*/
            /*border-radius 5px*/
</style>
