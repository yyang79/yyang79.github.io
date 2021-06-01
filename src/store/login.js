

const state = {
    loginbefore: true,
    loginback: false,
    username:'',
    userform:[],
    backinfo:[]
}



const actions = {
    loginbeforestatus({ commit }) {
        commit('loginbeforestatus')
    },
    loginbackstatus({ commit }) {
        commit('loginbackstatus')
    },
    userform({commit},value){
        commit("userform",value)
    },
    setbackinfo({commit},value){
        commit("setbackinfo",value)
    }
}


const mutations = {
    loginbeforestatus(state) {
        state.loginbefore = !state.loginbefore;
            state.loginback = !state.loginback;
    },
    loginbackstatus(state) {
        state.loginbefore = !state.loginbefore;
            state.loginback = !state.loginback;
    },
    userform(state,value){
        state.userform = value
    },
    setbackinfo(state,value){
        state.backinfo = value
    }
}



export default {
    namespaced: true,
    state,
    actions,
    mutations
}

