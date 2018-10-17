import Vue from 'vue'
import App from './App'
import store from './store'
//引入路由
import router from './router'
import LyTab from 'ly-tab'
import Vuex from "vuex";

Vue.use(LyTab);

new Vue({
  el: "#app",
  router,
  store,
  render : h=>h(App)
})
