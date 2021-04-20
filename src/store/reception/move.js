
const state = {
    flowers: [],
    movesearch: '',
    emptyflower: false,
    havef: false,
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
    emptyf({ commit }) {
        commit('emptyf')
    },
    havef({ commit }, val) {
        commit('havef', val)
    }
}



const mutations = {
    flowerlistchange(state, val) {
        state.movesearch = '';
    },
    searchchange(state, val) {
        state.movesearch = val;
    },
    emptyf(state) {
        state.flowers = []
        state.emptyflower = true
    },
    havef(state, val) {
        state.haveflower = true
        state.emptyflower = false
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

