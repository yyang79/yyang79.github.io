import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store/store'
import router from './router/router'

import axios from 'axios'
Vue.prototype.$axios = axios;
import * as echarts from 'echarts'
Vue.prototype.echarts = echarts;

Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
