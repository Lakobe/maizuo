import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/base.scss'
import { Tabbar, TabbarItem, Icon, Tab, Tabs, Swipe, SwipeItem } from 'vant'
import store from './store/index'

Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Tab).use(Tabs).use(Swipe).use(SwipeItem);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
