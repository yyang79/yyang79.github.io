import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../components/index/index'
import login from '../components/login/login'
import resigter from '../components/resigter/resigter'
import personal from '../components/personal/personal'
import myorder from '../components/myorder/myorder'
import shopcar from '../components/shopcar/shopcar'
import move from '../components/move/move'
import detailpage from '../components/detailpage/detailpage'
import forget from '../components/forget/forget'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: index
    },
    {
        name: 'forget',
        path: "/forget",
        component: forget
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/resigter",
        component: resigter
    },
    {
        path: "/shopcar",
        component: shopcar
    },
    {
        path: "/move",
        component: move
    },
    {
        path: "/detailpage",
        component: detailpage
    },
    {
        path: "/index",
        component: index
    },
    {
        path: "/personal",
        component: personal
    },
    {
        path: "/myorder",
        component: myorder
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
          selector: '#app',
        };
      },
})

export default router;
