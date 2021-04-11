import love2 from "../../assets/images/love/2.jpg";
import love3 from "../../assets/images/love/3.jpg";
import love4 from "../../assets/images/love/4.jpg";
import love5 from "../../assets/images/love/5.jpg";
import love6 from "../../assets/images/love/6.jpg";


const state = {
    allnav: false,
    chat: false,
    openchat: true,
    newlist: [
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
        }],
    lovelist: [],
    friendlist: [],
    basketlist: [],
    cakelist: [],
    boxlist: [],
    plantlist: []
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
    },
    showchat({ commit }) {
        commit('showchat')
    },
    hidechat({ commit }) {
        commit('hidechat')
    },
    lovelist({commit},value){
        commit("lovelist",value)
    },
    friendlist({commit},value){
        commit("friendlist",value)
    },
    basketlist({commit},value){
        commit("basketlist",value)
    },
    boxlist({commit},value){
        commit("boxlist",value)
    },
    cakelist({commit},value){
        commit("cakelist",value)
    },
    plantlist({commit},value){
        commit("plantlist",value)
    },
    newlist({commit},value){
        commit("newlist",value)
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
    },
    showchat(state) {
        state.chat = true
        state.openchat = false
    },
    hidechat(state) {
        state.chat = false
        state.openchat = true
    },
    lovelist(state,value){
        state.lovelist = value
    },
    friendlist(state,value){
        state.friendlist = value
    },
    basketlist(state,value){
        state.basketlist = value
    },
    boxlist(state,value){
        state.boxlist = value
    },
    cakelist(state,value){
        state.cakelist = value
    },
    plantlist(state,value){
        state.plantlist = value
    },
    newlist(state,value){
        state.newlist = value
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}

