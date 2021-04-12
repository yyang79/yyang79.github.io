const state = {
    flowers: [],
    tableData: [],
}

const actions = {
    getflower({ commit }, value) {
        commit("getflower", value)
    },
    tableData({ commit }, value) {
        commit("tableData", value)
    },
    delgoods({commit},value){
        commit("delgoods",value)
    }
}

const mutations = {
    getflower(state, value) {
        state.flowers = value
    },
    tableData(state, value) {
        var flog = true;
        if (state.tableData.length == 0) {
            state.tableData.push(value)
            flog = false
        } else {
            for (var i = 0; i < state.tableData.length; i++) {
                if (state.tableData[i].name == value.name) {
                    flog = false
                    state.tableData[i].num = parseInt(state.tableData[i].num) + parseInt(value.num)
                }
            }
            if (flog) {
                state.tableData.push(value)
            }

        }
    },
    delgoods(state,value){
        state.tableData.splice(value, 1);
    }
}



export default {
    namespaced: true,
    state,
    actions,
    mutations
}

