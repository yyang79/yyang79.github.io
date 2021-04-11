const state = {
    goodstype: '',
    name: '',
}

const actions = {
    goodstype({ commit }, value) {
        commit("goodstype", value)
    },
    name({ commit }, value) {
        commit("name", value)
    }
}



const mutations = {
    goodstype(state, value) {
        state.goodstype = value
    },
    name(state, value) {
        state.name = value
    }
}



export default {
    namespaced: true,
    state,
    actions,
    mutations
}

