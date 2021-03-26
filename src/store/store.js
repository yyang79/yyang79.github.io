import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import login from './modules/login'
import index from './modules/index'
/*import forget from './modules/forget' */
import move from './modules/move'
import shopcar from './modules/shopcar'
/* import resigter from './modules/resigter'
import detailpage from './modules/detailpage'
 */

const store = new Vuex.Store({
    modules: {
        login,
        index,
        /*forget, */
        move,
        shopcar,/* resigter,detailpage */
    },
})
export default store;
