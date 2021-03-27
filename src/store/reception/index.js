import love2 from "../../assets/images/love/2.jpg";
import love3 from "../../assets/images/love/3.jpg";
import love4 from "../../assets/images/love/4.jpg";
import love5 from "../../assets/images/love/5.jpg";
import love6 from "../../assets/images/love/6.jpg";
import love7 from "../../assets/images/love/7.jpg";
import love8 from "../../assets/images/love/8.jpg";
import love9 from "../../assets/images/love/9.jpg";

import friend2 from "../../assets/images/friend/2.jpg";
import friend3 from "../../assets/images/friend/3.jpg";
import friend4 from "../../assets/images/friend/4.jpg";
import friend5 from "../../assets/images/friend/5.jpg";
import friend6 from "../../assets/images/friend/6.jpg";
import friend7 from "../../assets/images/friend/7.jpg";
import friend8 from "../../assets/images/friend/8.jpg";
import friend9 from "../../assets/images/friend/9.jpg";

import basket2 from "../../assets/images/basket/2.jpg";
import basket3 from "../../assets/images/basket/3.jpg";
import basket4 from "../../assets/images/basket/4.jpg";
import basket5 from "../../assets/images/basket/5.jpg";
import basket6 from "../../assets/images/basket/6.jpg";
import basket7 from "../../assets/images/basket/7.jpg";
import basket8 from "../../assets/images/basket/8.jpg";
import basket9 from "../../assets/images/basket/9.jpg";

import cake2 from "../../assets/images/cake/2.jpg";
import cake3 from "../../assets/images/cake/3.jpg";
import cake4 from "../../assets/images/cake/4.jpg";
import cake5 from "../../assets/images/cake/5.jpg";
import cake6 from "../../assets/images/cake/6.jpg";
import cake7 from "../../assets/images/cake/7.jpg";
import cake8 from "../../assets/images/cake/8.jpg";
import cake9 from "../../assets/images/cake/9.jpg";

import box2 from "../../assets/images/box/2.jpg";
import box3 from "../../assets/images/box/3.jpg";
import box4 from "../../assets/images/box/4.jpg";
import box5 from "../../assets/images/box/5.jpg";
import box6 from "../../assets/images/box/6.jpg";
import box7 from "../../assets/images/box/7.jpg";
import box8 from "../../assets/images/box/8.jpg";
import box9 from "../../assets/images/box/9.jpg";

import plant2 from "../../assets/images/plant/2.jpg";
import plant3 from "../../assets/images/plant/3.jpg";
import plant4 from "../../assets/images/plant/4.jpg";
import plant5 from "../../assets/images/plant/5.jpg";
import plant6 from "../../assets/images/plant/6.jpg";
import plant7 from "../../assets/images/plant/7.jpg";
import plant8 from "../../assets/images/plant/8.jpg";
import plant9 from "../../assets/images/plant/9.jpg";


const state = {
    allnav: false,
    newlist: [{ src: love2 }, { src: love3 }, { src: love4 }, { src: love5 }, { src: love6 }],
    lovelist: [
        {
            src: love2,
            name: "XXXX",
            price: "129.00",
            sallnum: "1.2万",
        },
        {
            src: love3,
            name: "XXXX",
            price: "229.00",
            sallnum: "2.2万",
        },
        {
            src: love4,
            name: "XXXX",
            price: "179.00",
            sallnum: "3.1万",
        },
        {
            src: love5,
            name: "XXXX",
            price: "99.00",
            sallnum: "1.6万",
        },
        {
            src: love6,
            name: "XXXX",
            price: "199.00",
            sallnum: "2.7万",
        },
        {
            src: love7,
            name: "XXXX",
            price: "339.00",
            sallnum: "0.8万",
        },
        {
            src: love8,
            name: "XXXX",
            price: "529.00",
            sallnum: "1.0万",
        },
        {
            src: love9,
            name: "XXXX",
            price: "599.00",
            sallnum: "1.9万",
        },
    ],
    friendlist: [
        {
            src: friend2,
            name: "XXXX",
            price: "129.00",
            sallnum: "1.2万",
        },
        {
            src: friend3,
            name: "XXXX",
            price: "229.00",
            sallnum: "2.2万",
        },
        {
            src: friend4,
            name: "XXXX",
            price: "179.00",
            sallnum: "3.1万",
        },
        {
            src: friend5,
            name: "XXXX",
            price: "99.00",
            sallnum: "1.6万",
        },
        {
            src: friend6,
            name: "XXXX",
            price: "199.00",
            sallnum: "2.7万",
        },
        {
            src: friend7,
            name: "XXXX",
            price: "339.00",
            sallnum: "0.8万",
        },
        {
            src: friend8,
            name: "XXXX",
            price: "529.00",
            sallnum: "1.0万",
        },
        {
            src: friend9,
            name: "XXXX",
            price: "599.00",
            sallnum: "1.9万",
        },
    ],
    basketlist: [
        {
            src: basket2,
            name: "XXXX",
            price: "129.00",
            sallnum: "1.2万",
        },
        {
            src: basket3,
            name: "XXXX",
            price: "229.00",
            sallnum: "2.2万",
        },
        {
            src: basket4,
            name: "XXXX",
            price: "179.00",
            sallnum: "3.1万",
        },
        {
            src: basket5,
            name: "XXXX",
            price: "99.00",
            sallnum: "1.6万",
        },
        {
            src: basket6,
            name: "XXXX",
            price: "199.00",
            sallnum: "2.7万",
        },
        {
            src: basket7,
            name: "XXXX",
            price: "339.00",
            sallnum: "0.8万",
        },
        {
            src: basket8,
            name: "XXXX",
            price: "529.00",
            sallnum: "1.0万",
        },
        {
            src: basket9,
            name: "XXXX",
            price: "599.00",
            sallnum: "1.9万",
        },
    ],
    cakelist: [
        {
            src: cake2,
            name: "XXXX",
            price: "129.00",
            sallnum: "1.2万",
        },
        {
            src: cake3,
            name: "XXXX",
            price: "229.00",
            sallnum: "2.2万",
        },
        {
            src: cake4,
            name: "XXXX",
            price: "179.00",
            sallnum: "3.1万",
        },
        {
            src: cake5,
            name: "XXXX",
            price: "99.00",
            sallnum: "1.6万",
        },
        {
            src: cake6,
            name: "XXXX",
            price: "199.00",
            sallnum: "2.7万",
        },
        {
            src: cake7,
            name: "XXXX",
            price: "339.00",
            sallnum: "0.8万",
        },
        {
            src: cake8,
            name: "XXXX",
            price: "529.00",
            sallnum: "1.0万",
        },
        {
            src: cake9,
            name: "XXXX",
            price: "599.00",
            sallnum: "1.9万",
        },
    ],
    boxlist: [
        {
            src: box2,
            name: "XXXX",
            price: "129.00",
            sallnum: "1.2万",
        },
        {
            src: box3,
            name: "XXXX",
            price: "229.00",
            sallnum: "2.2万",
        },
        {
            src: box4,
            name: "XXXX",
            price: "179.00",
            sallnum: "3.1万",
        },
        {
            src: box5,
            name: "XXXX",
            price: "99.00",
            sallnum: "1.6万",
        },
        {
            src: box6,
            name: "XXXX",
            price: "199.00",
            sallnum: "2.7万",
        },
        {
            src: box7,
            name: "XXXX",
            price: "339.00",
            sallnum: "0.8万",
        },
        {
            src: box8,
            name: "XXXX",
            price: "529.00",
            sallnum: "1.0万",
        },
        {
            src: box9,
            name: "XXXX",
            price: "599.00",
            sallnum: "1.9万",
        },
    ],
    plantlist: [
        {
            src: plant2,
            name: "XXXX",
            price: "129.00",
            sallnum: "1.2万",
        },
        {
            src: plant3,
            name: "XXXX",
            price: "229.00",
            sallnum: "2.2万",
        },
        {
            src: plant4,
            name: "XXXX",
            price: "179.00",
            sallnum: "3.1万",
        },
        {
            src: plant5,
            name: "XXXX",
            price: "99.00",
            sallnum: "1.6万",
        },
        {
            src: plant6,
            name: "XXXX",
            price: "199.00",
            sallnum: "2.7万",
        },
        {
            src: plant7,
            name: "XXXX",
            price: "339.00",
            sallnum: "0.8万",
        },
        {
            src: plant8,
            name: "XXXX",
            price: "529.00",
            sallnum: "1.0万",
        },
        {
            src: plant9,
            name: "XXXX",
            price: "599.00",
            sallnum: "1.9万",
        },
    ]
}

const actions = {
    allnavtrue({ commit }) {
        commit('allnavtrue')
    },
    allnavfalse({ commit }) {
        commit('allnavfalse')
    },
    navstatuschange({ commit }) {
        commit('navstatuschange')
    }
}

const mutations = {
    allnavtrue(state) {
        state.allnav = true
    },
    allnavfalse(state) {
        state.allnav = false
    },
    navstatuschange(state) {
        state.allnav = !state.allnav
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}

