import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
