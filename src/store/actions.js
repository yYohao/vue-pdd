import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecShopList
} from '../api/index'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  REC_SHOP_LIST
} from './mutation-type'

export default {
  //获取首页轮播图
  async reqHomeCasual({commit}){
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual : result.message.data})
  },
  //获取首页导航
  async reqHomeNav({commit}){
    const nav_result = await getHomeNav();
    commit(HOME_NAV, {homenav : nav_result.message.data})
  },
  //获取首页商品列表
  async reqHomeShopList({commit}){
    const nav_result = await getHomeShopList();
    commit(HOME_SHOP_LIST, {homeshoplist : nav_result.message.goods_list})
  },
  //获取推荐商品列表
  async reqRecShopList({commit}){
    const nav_result = await getRecShopList();
    commit(REC_SHOP_LIST, {recommendshoplist : nav_result.message.data})
  },
}
