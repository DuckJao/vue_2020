import Vue from 'vue';

// 套件要在app.vue前載入
import axios from 'axios';
import api from '@/service/api'; // 第二步驟會用到
import VueAxios from 'vue-axios';
// 教學專案採用element UI組件來切版和建置表單，所以先裝好
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router';
import store from './store';

// 套用並設定prototype
// 載入的套件要用Vue.use(套件名)來啟動
Vue.config.productionTip = true;
Vue.prototype.$api = api; // 定義api這個常數給AXIOS存取json-server或實際api環境用

Vue.use(ElementUI);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
