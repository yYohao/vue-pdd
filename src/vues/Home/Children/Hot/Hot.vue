<template>
  <div class="hot">
      <!--轮播图-->
      <div class="swiper-container" v-if="homecasual.length > 0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(casual, index) in homecasual" :key="index">
            <img :src="casual.imgurl" alt="" width="100%">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div >
      <!--导航-->
      <HotNav></HotNav>
      <!--广告-->
      <div class="hot-ad">
        <img src="./../../imgs/hot_ad/home_ad.gif" width="100%" alt="">
      </div>
      <!--商品-->
      <hot-shop-list />
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HotNav from './HotNav'
  import HotShopList from './HotShopList'
  import {mapState} from 'vuex'

  export default {
    name: "Hot",
    mounted() {
      //请求轮播图数据
      this.$store.dispatch('reqHomeCasual');
      //获取导航
      this.$store.dispatch('reqHomeNav');
      //获取导航
      this.$store.dispatch('reqHomeShopList');

      //创建swiper实例
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    watch:{
      homecasual(){
        this.$nextTick(()=>{
          //创建swiper实例
          new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    computed: {
      //获取轮播数据
      ...mapState(['homecasual']),

    },
    components:{
      HotNav,HotShopList
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width 100%
    height 100%
    padding-top 46px
    background #f5f5f5
    .hot-ad
      background-color #fff
      margin 8px 0
      padding 5px
</style>
