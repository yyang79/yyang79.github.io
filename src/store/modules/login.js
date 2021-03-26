

const state = {
    loginbefore: true,
    loginback: false,
}



const actions = {
    loginbeforestatus({ commit }) {
        commit('loginbeforestatus')
    },
    loginbackstatus({ commit }) {
        commit('loginbackstatus')
    }
}


const mutations = {
    loginbeforestatus(state) {
        state.loginbefore = !state.loginbefore,
            state.loginback = !state.loginback
    },
    loginbackstatus(state) {
        state.loginbefore = !state.loginbefore,
            state.loginback = !state.loginback
    }
}



export default {
    namespaced: true,
    state,
    actions,
    mutations
}

