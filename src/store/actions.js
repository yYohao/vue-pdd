import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecShopList,
  getSearchGoods
} from '../api/index'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  REC_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO
} from './mutation-type'

export default {
  //获取首页轮播图
  async reqHomeCasual({commit}){
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual : result.message})
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
  async reqRecShopList({commit}, params){
    console.log(params);
    const nav_result = await getRecShopList(params);
    commit(REC_SHOP_LIST, {recommendshoplist : nav_result.message})
  },
  //获取搜索商品列表
  async reqSearchGoods({commit}, callback){
    const nav_result = await getSearchGoods();
    commit(SEARCH_GOODS, {searchgoods : nav_result.message.data})

    callback && callback();
  },
  //同步用户信息
  syncUserInfo({commit}, userInfo){
    commit(USER_INFO, {userInfo})
  }
}
