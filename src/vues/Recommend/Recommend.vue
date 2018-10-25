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
    import {mapState} from 'vuex';
    import ShopList from './../../components/ShopList/ShopList';
    import BScroll from 'better-scroll';
    import { Indicator } from 'mint-ui';
    export default {
        name: "Recommend",
        data(){
          return{
            page : 1,
            count : 10
          }
        },
        mounted(){
          Indicator.open();
          this.$store.dispatch('reqRecShopList', {page:this.page, count: this.count, callback: ()=>{
            Indicator.close();
          }});
        },
        computed:{
          ...mapState(['recommendshoplist']),
        },
        components: {
          ShopList
        },
        watch:{
          recommendshoplist(){

            this.$nextTick(()=>{
              //让当前页码+1
              this.page += 1;

              this._initBScroll();
            })
          }
        },
        methods:{
          _initBScroll(){
            //初始化
            this.listScroll = new BScroll('.recommend-container',{
              scrollY: true,
              probeType: 3
            });

            //监听列表滚动
            this.listScroll.on('touchEnd', (pos)=>{
              //监听下拉
              // console.log(pos.y);
              // console.log(this.listScroll.maxScrollY);
              if (pos.y >= 50){
                console.log("下拉");
              }
              //监听上啦
              if (this.listScroll.maxScrollY > pos.y + 30){
                Indicator.open();
                this.$store.dispatch('reqRecShopList', {page:this.page, count: this.count, callback: ()=>{
                  Indicator.close();
                }});
              }
            })

            //列表滚动结束
            this.listScroll.on('scrollEnd', (pos)=>{
              this.listScroll.refresh();
            })
          },


        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-container
    background #f5f5f5
    width 100%
    height 100%
    overflow hidden
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background-color #f5f5f5
      padding-bottom 50px
</style>
