import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import login from './login'
//前台store
import index from './reception/index'
import forget from './reception/forget'
import move from './reception/move'
import shopcar from './reception/shopcar'
import resigter from './reception/resigter'
import detailpage from './reception/detailpage'
//后台store
import backstage_index from './backstage/index'
import info from './backstage/info'
import purchase from './backstage/purchase'
import sale from './backstage/sale'
import stock from './backstage/stock'
import chart from './backstage/chart'
import system from './backstage/system'

const store = new Vuex.Store({
    modules: {
        login,
        //前台store
        index,
        forget,
        move,
        shopcar,
        resigter,
        detailpage,
        //后台store
        backstage_index,
        info,
        purchase,
        sale,
        stock,
        chart,
        system
    }
})
export default store;
