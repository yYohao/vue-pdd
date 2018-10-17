<template>
    <div class="shot-container" v-if="homeshoplist.length > 0">
        <ul class="shop-list">
            <li class="shop-list-item" v-for="(shop, index) in homeshoplist" :key="index">
              <img :src="shop.image_url" width="100%" alt="">
              <h4 class="list-item-title">{{shop.goods_name}}</h4>
              <div class="list-item-bottom">
                <span class="item-price">￥{{shop.normal_price / 100}}</span>
                <span class="item-count">{{shop.sales_tip}}</span>
                <span class="item-user">
                  <img :src="user.avatar"  v-for="(user , index1) in shop.bubble" :key="index1" alt="">
                </span>
                <span class="item-buy">
                  <button>去拼单 ></button>
                </span>
              </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "HotShopList",
        computed:{
          ...mapState(['homeshoplist'])
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .shot-container
    margin-bottom 50px
    background-color #f5f5f5
    .shop-list
      .shop-list-item
        margin-bottom 10px
        background-color #fff
        display flex
        flex-direction column
        .list-item-title
          line-height 22px
          width 94%
          margin-left 3%
          height 44px
          overflow hidden
        .list-item-bottom
          margin 10px 0
          display flex
          flex-direction row
          justify-content space-around
          align-items center
          .item-price
            font-size 18px
            text-align center
            font-weight bold
            color red
            flex 1
          .item-count
            flex 2
            font-size 12px
            color #ccc
          .item-user
            display flex
            justify-content center
            align-items center
            flex 1
            img
              width 30px
              border-radius 50%
            img:nth-child(2)
              margin-left -6px
          .item-buy
            flex 2
            button
              width 80%
              height 30px
              color #fff
              display flex
              justify-content center
              align-items center
              border none
              font-size 15px
              margin-left 10px
              background-color orangered
              border-radius 8px

</style>
