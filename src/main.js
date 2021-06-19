import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import FastClick from 'fastclick'
// Toast
import Toast from 'components/common/toast/index.js'
//引入vant插件
import Vant from 'vant';
// 动态设置rem基准值
import 'vant/lib/index.css';

//插件动态设置基准值 里面是淘宝flexble
import 'amfe-flexible'
Vue.use(Vant);
Vue.use(Toast);
// 懒加载
Vue.use(VueLazyLoad,{
  // 懒加载占位
  //  loading:'require图片'
})


Vue.config.productionTip = false
// 引入fastclick
// FastClick.attach(document.body);
new Vue({
	router,
  store,
  render: h => h(App),
}).$mount('#app')
