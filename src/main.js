import Vue from 'vue'
import App from './App'

//引入路由
import router from './router'
import LyTab from 'ly-tab'

Vue.use(LyTab);

new Vue({
  el: "#app",
  router,
  render : h=>h(App)
})
