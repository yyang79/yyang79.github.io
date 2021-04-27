const state = {
    allnav: false,
    chat: false,
    openchat: true,
    newlist: [],
    lovelist: [],
    friendlist: [],
    basketlist: [],
    cakelist: [],
    boxlist: [],
    plantlist: [],
    searchimglist: [],
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
    lovelist({ commit }, value) {
        commit("lovelist", value)
    },
    friendlist({ commit }, value) {
        commit("friendlist", value)
    },
    basketlist({ commit }, value) {
        commit("basketlist", value)
    },
    boxlist({ commit }, value) {
        commit("boxlist", value)
    },
    cakelist({ commit }, value) {
        commit("cakelist", value)
    },
    plantlist({ commit }, value) {
        commit("plantlist", value)
    },
    newlist({ commit }, value) {
        commit("newlist", value)
    },
    setimglist({ commit }, value) {
        commit("setimglist", value)
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
    lovelist(state, value) {
        state.lovelist = value
    },
    friendlist(state, value) {
        state.friendlist = value
    },
    basketlist(state, value) {
        state.basketlist = value
    },
    boxlist(state, value) {
        state.boxlist = value
    },
    cakelist(state, value) {
        state.cakelist = value
    },
    plantlist(state, value) {
        state.plantlist = value
    },
    newlist(state, value) {
        state.newlist = value
    },
    setimglist(state, value) {
        state.searchimglist = value
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}

