import ajax from './ajax'

//基础路径
const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'http://localhost:3000';

//请求方法

//1请求首页轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual');
//2请求首页nav列表
export const getHomeNav = ()=> ajax(BASE_URL + '/api/homenav');
//3请求首页购物列表
export const getHomeShopList = ()=> ajax(BASE_URL + '/api/homeshoplist');
//4请求推荐商品列表
export const getRecShopList = (params)=> ajax(BASE_URL + '/api/recommendshoplist', params);
//5请求搜索商品列表
export const getSearchGoods = ()=> ajax(BASE_URL + '/api/searchgoods');
//6请求短信验证码
export const getPhoneCode = (phone)=> ajax(BASE_URL + '/api/sendcode', {phone});
//7手机验证码登录
export const phoneCodeLogin = (phone,code)=> ajax(BASE_URL + '/api/login_code', {phone,code}, 'POST');
//8密码登录
export const pwdLogin = (user_name, pwd, captcha)=> ajax(BASE_URL + '/api/login_pwd', {user_name, pwd, captcha}, 'POST');
