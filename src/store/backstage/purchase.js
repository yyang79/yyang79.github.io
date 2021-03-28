

const state = {

    playerlist: [{ value: "选项一", lable: "选项一" }, { value: "选项二", lable: "选项二" }, { value: "选项三", lable: "选项三" }],
    player: "",

    goodslist: [],
    goods: "",

    goodsdata: [],
    goodsnum: "",
    addform: [],
    tableData: [],
    updateform: [],

    date: '',

    num: 0,
}

const getters = {

}

const actions = {

}


const mutations = {
    playerchange(state, value) {
        state.player = value
    },
    selectchange(state, value) {
        state.goods = value
    },
    goodsnum(state, value) {
        state.goodsnum = value
    },
    goodsdata(state, value) {
        state.goodsdata = value
    },
    addform(state, value) {
        state.addform = value
    },
    goodslist(state, value) {
        state.goodslist.push(value)
    },
    goodslistsort(state) {
        for (var i = 0; i < state.goodslist.length - 1; i++) {
            for (var j = 0; j < state.goodslist.length - 1 - i; j++) {
                if (state.goodslist[j].value > state.goodslist[j + 1].value) {
                    var temp = state.goodslist[j];
                    state.goodslist[j] = state.goodslist[j + 1];
                    state.goodslist[j + 1] = temp;
                }
            }
        }
    },
    goods(state, value) {
        state.goods = value
    },
    tableDataadd(state, value) {
        state.tableData.push(value)
    },
    tableDatadelete(state, value) {
        state.tableData.splice(value, 1)
    },
    tableData(state, value) {
        state.tableData = value
    },
    updateform(state, value) {
        state.updateform = value
    },
    updatenum(state, value) {
        state.updateform.goodsNum = value
    },
    countnum(state, value) {
        state.num = value
    },
    datechange(state, value) {
        state.date = value
    }
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

