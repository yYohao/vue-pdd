//1.引入模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../vues/Home/Home'
import Recommend from './../vues/Recommend/Recommend'
import Search from './../vues/Search/Search'
import Chat from './../vues/Chat/Chat'
import Mine from './../vues/Mine/Mine'
import Hot from '../vues/Home/Children/Hot/Hot'
import Box from './../vues/Home/Children/Box'
import Dress from './../vues/Home/Children/Dress'
import Ele from './../vues/Home/Children/Ele'
import Food from './../vues/Home/Children/Food'
import General from './../vues/Home/Children/General'
import Man from './../vues/Home/Children/Man'
import Mbaby from './../vues/Home/Children/Mbaby'
import Shirt from './../vues/Home/Children/Shirt'
//2.声明使用
Vue.use(VueRouter);

//3.输出路由对象
export default new VueRouter({
  //3.1 配置一级路由
  routes : [
    {
      path: '/home',
      component: Home,
      children : [
        {path: 'hot', component: Hot},
        {path: 'box', component: Box},
        {path: 'dress', component: Dress},
        {path: 'ele', component: Ele},
        {path: 'food', component: Food},
        {path: 'general', component: General},
        {path: 'mbaby', component: Mbaby},
        {path: 'man', component: Man},
        {path: 'shirt', component: Shirt},
        {path: '/home', redirect: '/home/hot'},
      ]
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
});
