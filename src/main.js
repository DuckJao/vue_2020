import Vue from 'vue';

// 套件要在app.vue之前添加，不然ESLint會報錯
import ElementUI from 'element-ui';
import axios from 'axios';
import api from '@/service/api'; // 第二步驟會用到
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css'; // 一定要在最後面，不然會被ESLin報錯

Vue.config.productionTip = true;

// use是使用套件，套用並設定prototype
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.prototype.$api = api; // 定義api這個常數給AXIOS存取json-server或實際api環境用

new Vue({
  router,
  store,
  el: '#app',
  render: (h) => h(App),
}).$mount('#app');
