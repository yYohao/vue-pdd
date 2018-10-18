import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  REC_SHOP_LIST,
  SEARCH_GOODS
} from './mutation-type'

export default {
  //首页轮播图
  [HOME_CASUAL](state, {homecasual}){
    state.homecasual = homecasual;
  },
  //首页导航
  [HOME_NAV](state, {homenav}){
    state.homenav = homenav;
  },
  [HOME_SHOP_LIST](state, {homeshoplist}){
    state.homeshoplist = homeshoplist;
  },
  [REC_SHOP_LIST](state, {recommendshoplist}){
    state.recommendshoplist = recommendshoplist;
  },
  [SEARCH_GOODS](state, {searchgoods}){
    state.searchgoods = searchgoods;
  },
}
