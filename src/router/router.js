import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../components/login'
//前台
import reception_resigter from '../components/reception/resigter/resigter'
import reception_forget from '../components/reception/forget/forget'
import reception_index from '../components/reception/index/index'
import reception_personal from '../components/reception/personal/personal'
import reception_order from '../components/reception/personal/order'
import reception_personalinfo from '../components/reception/personal/personalinfo'
import reception_refundsale from '../components/reception/personal/refundsale'
import reception_shopcar from '../components/reception/shopcar/shopcar'
import reception_move from '../components/reception/move/move'
import reception_detailpage from '../components/reception/detailpage/detailpage'
//后台
import backstage_index from '../components/backstage/index/index'
import backstage_customer from '../components/backstage/info/customer'
import backstage_product from '../components/backstage/info/product'
import backstage_protype from '../components/backstage/info/protype'
import backstage_supplier from '../components/backstage/info/supplier'
import backstage_purchase from '../components/backstage/purchase/purchase'
import backstage_historypurchase from '../components/backstage/purchase/historypurchase'
import backstage_historypurchasedetails from '../components/backstage/purchase/historypurchasedetails'
import backstage_sale from '../components/backstage/sale/sale'
import backstage_order from '../components/backstage/sale/order'
import backstage_orderdetails from '../components/backstage/sale/orderdetails'
import backstage_historysale from '../components/backstage/sale/historysale'
import backstage_historysaledetails from '../components/backstage/sale/historysaledetails'
import backstage_stockcheck from '../components/backstage/stock/stockcheck'
import backstage_stockwarn from '../components/backstage/stock/stockwarn'
import backstage_historystockcheck from '../components/backstage/stock/historystockcheck'
import backstage_historystockcheckdetails from '../components/backstage/stock/historystockcheckdetails'
import backstage_salechart from '../components/backstage/chart/salechart'
import backstage_stockchart from '../components/backstage/chart/stockchart'
import backstage_purchasechart from '../components/backstage/chart/purchasechart'
import backstage_user from '../components/backstage/system/user'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: reception_index
    },
    {
        name: 'forget',
        path: "/forget",
        component: reception_forget
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/resigter",
        component: reception_resigter
    },
    {
        path: "/shopcar",
        component: reception_shopcar
    },
    {
        path: "/move",
        component: reception_move
    },
    {
        path: "/detailpage",
        component: reception_detailpage
    },
    {
        path: "/index",
        component: reception_index
    },
    {
        path: "/personal",
        component: reception_personal,
        children: [{
            path: "/",
            component: reception_personalinfo,
        },
        {
            path: "/myorder",
            component: reception_order
        },
        {
            path: "/refundsale",
            component: reception_refundsale
        },
        {
            path: "/personalinfo",
            component: reception_personalinfo
        }
        ]
    },
    {
        path: "/backstage",
        component: backstage_index,
        children: [{
            path: "/",
            component: backstage_stockwarn,
        },
        {
            path: "/customer",
            component: backstage_customer,
        },
        {
            path: "/product",
            component: backstage_product,
        },
        {
            path: "/protype",
            component: backstage_protype,
        },
        {
            path: "/supplier",
            component: backstage_supplier,
        },
        {
            path: "/purchase",
            component: backstage_purchase,
        },
        {
            path: "/purchase/history",
            component: backstage_historypurchase,
        },
        {
            path: "/purchase/history/details/:id",
            component: backstage_historypurchasedetails,
            props: true
        },
        {
            path: "/sale",
            component: backstage_sale,
        },
        {
            path: "/order",
            component: backstage_order,
        },
        {
            path: "/order/details/:id",
            component: backstage_orderdetails,
            props: true
        },
        {
            path: "/sale/history",
            component: backstage_historysale,
        },
        {
            path: "/sale/history/details/:id",
            component: backstage_historysaledetails,
            props: true
        },
        {
            path: "/stockcheck",
            component: backstage_stockcheck,
        },
        {
            path: "/stockcheck/history",
            component: backstage_historystockcheck,
        },
        {
            path: "/stockcheck/history/details/:id",
            component: backstage_historystockcheckdetails,
        },
        {
            path: "/purchasechart",
            component: backstage_purchasechart,
        },
        {
            path: "/salechart",
            component: backstage_salechart,
        },
        {
            path: "/stockchart",
            component: backstage_stockchart,
        },
        {
            path: "/user",
            component: backstage_user,
        },]
    }
]

const router = new VueRouter({
    mode: "hash",
    routes,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router;
