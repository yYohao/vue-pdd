<template>
    <div class="hot-nav">
      <!-- 滚动区域 -->
      <div class="hot-nav-content">
        <div class="nav-content-inner">
          <a class="inner-item" v-for="(nav, index) in homenav" :key="index">
            <img :src="nav.iconurl" alt="">
            <span>{{nav.icontitle}}</span>
          </a>

        </div>
      </div>
      <!-- 滚动条 -->
      <div class="hot-nav-bottom">
        <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
      </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
      name: "HotNav",
      data(){
        return{
          //屏幕宽度
          screenW : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          //滚动内容宽度
          scrollContentW : 720,
          //滚动条背景长度
          bgBarW : 100,
          //滚动条长度
          barXWidth : 0,
          //起点
          startX : 0,
          //结束点
          endFLag : 0,
          //移动距离
          barMoveWidth : 0
        }
      },
      computed: {
        innerBarStyle(){
          return{
            width : `${this.barXWidth}px`,
            left: `${this.barMoveWidth}px`
          }
        },
        //获取导航
        ...mapState(['homenav']),
      },
      mounted(){
        //获取轮播图bar宽度
        this.getBottomBarWidth();
        //导航事件
        this.bindEvent();

      },
      methods: {
        //获取滚动条宽度
        getBottomBarWidth(){
          this.barXWidth = this.screenW * (this.bgBarW / this.scrollContentW)
        },
        //移动端事件监听
        bindEvent(){
          this.$el.addEventListener('touchstart',this.handleTouchStart,false);
          this.$el.addEventListener('touchmove',this.handleTouchMove,false);
          this.$el.addEventListener('touchend',this.handleTouchEnd,false);
        },
        //开始触摸
        handleTouchStart(event){
          //console.log(event.touches);
          //获取触点
          let touch = event.touches[0];
          //求出起始点
          this.startX = Number(touch.pageX);
          //console.log(this.startX);
        },
        //移动
        handleTouchMove(event){
          // console.log(22);
          let touch = event.touches[0];
          //移动距离
          let moveWidth = Number(touch.pageX) - this.startX;
          //console.log(moveWidth);
          //求出滚动条走的距离
          this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.endFLag);
          //边界值处理
          if(this.barMoveWidth <= 0 ){ //左边
            this.barMoveWidth = 0;
          }else if (this.barMoveWidth >= this.bgBarW - this.barXWidth ){ //右边
            this.barMoveWidth = this.bgBarW - this.barXWidth;
          }

        },
        //结束触摸
        handleTouchEnd(){
          //console.log(33);
          this.endFLag = this.barMoveWidth;

        },
      }

    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot-nav
    width 100%
    height 180px
    position relative
    background-color #fff
    padding-bottom 10px
    .hot-nav-content
      width 100%
      overflow-x scroll
      .nav-content-inner
        width 720px
        height 180px
        display flex
        flex-wrap wrap
        .inner-item
          width 90px
          height 90px
          display flex
          flex-direction column
          justify-content center
          align-items center
          font-size 14px
          color #666
          img
            width 40%
            margin-bottom 5px
    .hot-nav-content::-webkit-scrollbar
      display none
    .hot-nav-bottom
      width 100px
      height 2px
      background-color #ccc
      position absolute
      left 50%
      margin-left -50px
      bottom 8px
      .hot-nav-bottom-inner
        position absolute
        left 0
        height 100%
        background-color orangered
        width 0
</style>
