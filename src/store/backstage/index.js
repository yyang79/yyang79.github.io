
const state = {
    chat: false,
    chatplace: false,
    users: [],
    user: '',
    chatmin: false,
    lists: [],
    newlists: [],
    activeName: "1",
    test:'',
}



const actions = {
    showchat({ commit }) {
        commit('showchat')
    },
    hidechat({ commit }) {
        commit('hidechat')
    },
    showchatplace({ commit }) {
        commit('showchatplace')
    },
    hidechatplace({ commit }) {
        commit('hidechatplace')
    },
    adduser({ commit }, value) {
        commit('adduser', value)
    },
    deletechat({ commit }, value) {
        commit('deletechat', value)
    },
    chatplaceall({ commit }) {
        commit('chatplaceall')
    },
    chooseuser({ commit }, value) {
        commit('chooseuser', value)
    },
    chatmin({ commit }) {
        commit('chatmin')
    },
    chatreset({ commit }) {
        commit('chatreset')
    },
    closenow({ commit }) {
        commit('closenow')
    },
    lists({ commit }, value) {
        commit('lists', value)
    },
    newlists({ commit }, value) {
        commit('newlists', value)
    },
    active({ commit }, value) {
        commit('active', value)
    },
    delnewlist({commit},value){
        commit("delnewlist",value)
    }
}


const mutations = {
    showchat(state) {
        state.chat = true
    },
    hidechat(state) {
        state.chat = false
    },
    showchatplace(state) {
        state.chatplace = true
    },
    hidechatplace(state) {
        state.chatplace = false
    },
    adduser(state, value) {
        if (state.users.length == 0) {
            state.user = value.name;
            state.users.push(value);
        } else {
            var flag = true;
            for (var i = 0; i < state.users.length; i++) {
                if (state.users[i].name == value.name) {
                    flag = false;
                }
            }
            if (flag) {
                state.user = value.name;
                state.users.push(value);
            } else {
                state.user = value.name;
            }
        }
    },
    deletechat(state, value) {
        if (state.users.length == 1) {
            state.user = ''
            state.chatplace = false
        } else {
            for (let i = 0; i < state.users.length; i++) {
                if (state.users[i].name === value) {
                    state.users.splice(i, 1)
                    if (i == state.users.length) {
                        state.user = state.users[i - 1].name
                    } else if (i < state.users.length) {
                        state.user = state.users[i + 1].name
                    }
                }
            }
        }
    },
    chatplaceall(state) {
        state.users = []
    },
    chooseuser(state, value) {
        state.user = value
    },
    chatmin(state) {
        state.chatmin = true;
        state.chatplace = false
    },
    chatreset(state) {
        state.chatmin = false;
        state.chatplace = true
    },
    closenow(state) {
        if (state.users.length == 1) {
            state.user = ''
            state.chatplace = false
        } else {
            for (let i = 0; i < state.users.length; i++) {
                if (state.users[i].name === state.user) {
                    state.users.splice(i, 1)
                    if (i == state.users.length) {
                        state.user = state.users[i - 1].name
                    } else if (i < state.users.length) {
                        state.user = state.users[i].name
                    }
                }
            }
        }
    },
    lists(state, value) {
        state.lists = value
    },
    newlists(state, value) {
        state.newlists.push(value)
    },
    active(state, value) {
        state.activeName = value
    },
    delnewlist(state, value) {
        state.test = value
        for (let i = 0; i < state.newlists.length; i++) {
            if (state.newlists[i].userName == value) {
                state.newlists.splice(i, 1)
            }
        }
    },
}



export default {
    namespaced: true,
    state,
    actions,
    mutations
}

