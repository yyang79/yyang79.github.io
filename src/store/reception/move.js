
const state = {
    flowers: [],
    movesearch: '',
    haveflower: false,
    emptyflower: false,
    moveto: false,
}

const getters = {

}

const actions = {
    flowerlistchange({ commit }, val) {
        commit('flowerlistchange', val)
    },
    searchchange({ commit }, val) {
        commit('searchchange', val)
    },
    havef({ commit }) {
        commit('havef')
    },
    emptyf({ commit }) {
        commit('emptyf')
    },
    moveto({ commit }, val) {
        commit('moveto', val)
    }
}



const mutations = {
    flowerlistchange(state, val) {
        state.movesearch = '';
    },
    searchchange(state, val) {
        state.movesearch = val;
    },
    havef(state) {
        state.haveflower = true
    },
    emptyf(state) {
        state.emptyflower = true
    },
    moveto(state, val) {
        state.moveto = true
        state.flowers = val
    },
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

