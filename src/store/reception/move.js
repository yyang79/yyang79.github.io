import fs1 from "../../assets/images/love/2.jpg";
import fs2 from "../../assets/images/love/3.jpg";
import fs3 from "../../assets/images/love/4.jpg";
import fs4 from "../../assets/images/love/5.jpg";
import fs5 from "../../assets/images/love/6.jpg";
import fs6 from "../../assets/images/love/7.jpg";
import fs7 from "../../assets/images/love/8.jpg";


const state = {
    flowers: [],
    flowers1: [
        { src: fs1, name: "A", prince: "39.00", sale: "1.2万" },
        { src: fs1, name: "B", prince: "29.00", sale: "2.0万" },
        { src: fs1, name: "C", prince: "19.00", sale: "3.2万" },
        { src: fs1, name: "D", prince: "59.00", sale: "3.0万" },
        { src: fs1, name: "E", prince: "79.00", sale: "1.2万" },
        { src: fs1, name: "F", prince: "89.00", sale: "1.1万" },
        { src: fs1, name: "G", prince: "129.00", sale: "1.0万" },
        { src: fs1, name: "H", prince: "128.00", sale: "3.9万" },
        { src: fs1, name: "I", prince: "139.00", sale: "1.4万" },
        { src: fs1, name: "J", prince: "148.00", sale: "2.9万" },
        { src: fs1, name: "K", prince: "178.00", sale: "2.5万" },
        { src: fs1, name: "L", prince: "246.00", sale: "252" },
        { src: fs1, name: "M", prince: "260.00", sale: "2534" },
        { src: fs1, name: "N", prince: "190.00", sale: "354" },
        { src: fs1, name: "O", prince: "189.00", sale: "568" },
        { src: fs1, name: "P", prince: "349.00", sale: "689" },
        { src: fs1, name: "Q", prince: "355.00", sale: "23" },
        { src: fs1, name: "R", prince: "379.00", sale: "4675" },
        { src: fs1, name: "S", prince: "389.00", sale: "467" },
        { src: fs1, name: "T", prince: "399.00", sale: "789" },
        { src: fs1, name: "U", prince: "499.00", sale: "980" },
        { src: fs1, name: "V", prince: "599.00", sale: "456" },
        { src: fs1, name: "W", prince: "479.00", sale: "678" },
        { src: fs1, name: "X", prince: "699.00", sale: "5689" },
        { src: fs1, name: "Y", prince: "899.00", sale: "4355" },
        { src: fs1, name: "Z", prince: "999.00", sale: "9706" },
    ],
    flowers2: [
        { src: fs2, name: "A", prince: "39.00", sale: "1.2万" },
        { src: fs2, name: "B", prince: "29.00", sale: "2.0万" },
        { src: fs2, name: "C", prince: "19.00", sale: "3.2万" },
        { src: fs2, name: "D", prince: "59.00", sale: "3.0万" },
        { src: fs2, name: "E", prince: "79.00", sale: "1.2万" },
        { src: fs2, name: "F", prince: "89.00", sale: "1.1万" },
        { src: fs2, name: "G", prince: "129.00", sale: "1.0万" },
        { src: fs2, name: "H", prince: "128.00", sale: "3.9万" },
        { src: fs2, name: "I", prince: "139.00", sale: "1.4万" },
        { src: fs2, name: "J", prince: "148.00", sale: "2.9万" },
        { src: fs2, name: "K", prince: "178.00", sale: "2.5万" },
        { src: fs2, name: "L", prince: "246.00", sale: "252" },
        { src: fs2, name: "M", prince: "260.00", sale: "2534" },
        { src: fs2, name: "N", prince: "190.00", sale: "354" },
        { src: fs2, name: "O", prince: "189.00", sale: "568" },
        { src: fs2, name: "P", prince: "349.00", sale: "689" },
        { src: fs2, name: "Q", prince: "355.00", sale: "23" },
        { src: fs2, name: "R", prince: "379.00", sale: "4675" },
        { src: fs2, name: "S", prince: "389.00", sale: "467" },
        { src: fs2, name: "T", prince: "399.00", sale: "789" },
        { src: fs2, name: "U", prince: "499.00", sale: "980" },
        { src: fs2, name: "V", prince: "599.00", sale: "456" },
        { src: fs2, name: "W", prince: "479.00", sale: "678" },
        { src: fs2, name: "X", prince: "699.00", sale: "5689" },
        { src: fs2, name: "Y", prince: "899.00", sale: "4355" },
        { src: fs2, name: "Z", prince: "999.00", sale: "9706" },
    ],
    flowers3: [
        { src: fs3, name: "A", prince: "39.00", sale: "1.2万" },
        { src: fs3, name: "B", prince: "29.00", sale: "2.0万" },
        { src: fs3, name: "C", prince: "19.00", sale: "3.2万" },
        { src: fs3, name: "D", prince: "59.00", sale: "3.0万" },
        { src: fs3, name: "E", prince: "79.00", sale: "1.2万" },
        { src: fs3, name: "F", prince: "89.00", sale: "1.1万" },
        { src: fs3, name: "G", prince: "129.00", sale: "1.0万" },
        { src: fs3, name: "H", prince: "128.00", sale: "3.9万" },
        { src: fs3, name: "I", prince: "139.00", sale: "1.4万" },
        { src: fs3, name: "J", prince: "148.00", sale: "2.9万" },
        { src: fs3, name: "K", prince: "178.00", sale: "2.5万" },
        { src: fs3, name: "L", prince: "246.00", sale: "252" },
        { src: fs3, name: "M", prince: "260.00", sale: "2534" },
        { src: fs3, name: "N", prince: "190.00", sale: "354" },
        { src: fs3, name: "O", prince: "189.00", sale: "568" },
        { src: fs3, name: "P", prince: "349.00", sale: "689" },
        { src: fs3, name: "Q", prince: "355.00", sale: "23" },
        { src: fs3, name: "R", prince: "379.00", sale: "4675" },
        { src: fs3, name: "S", prince: "389.00", sale: "467" },
        { src: fs3, name: "T", prince: "399.00", sale: "789" },
        { src: fs3, name: "U", prince: "499.00", sale: "980" },
        { src: fs3, name: "V", prince: "599.00", sale: "456" },
        { src: fs3, name: "W", prince: "479.00", sale: "678" },
        { src: fs3, name: "X", prince: "699.00", sale: "5689" },
        { src: fs3, name: "Y", prince: "899.00", sale: "4355" },
        { src: fs3, name: "Z", prince: "999.00", sale: "9706" },
    ],
    flowers4: [
        { src: fs4, name: "A", prince: "39.00", sale: "1.2万" },
        { src: fs4, name: "B", prince: "29.00", sale: "2.0万" },
        { src: fs4, name: "C", prince: "19.00", sale: "3.2万" },
        { src: fs4, name: "D", prince: "59.00", sale: "3.0万" },
        { src: fs4, name: "E", prince: "79.00", sale: "1.2万" },
        { src: fs4, name: "F", prince: "89.00", sale: "1.1万" },
        { src: fs4, name: "G", prince: "129.00", sale: "1.0万" },
        { src: fs4, name: "H", prince: "128.00", sale: "3.9万" },
        { src: fs4, name: "I", prince: "139.00", sale: "1.4万" },
        { src: fs4, name: "J", prince: "148.00", sale: "2.9万" },
        { src: fs4, name: "K", prince: "178.00", sale: "2.5万" },
        { src: fs4, name: "L", prince: "246.00", sale: "252" },
        { src: fs4, name: "M", prince: "260.00", sale: "2534" },
        { src: fs4, name: "N", prince: "190.00", sale: "354" },
        { src: fs4, name: "O", prince: "189.00", sale: "568" },
        { src: fs4, name: "P", prince: "349.00", sale: "689" },
        { src: fs4, name: "Q", prince: "355.00", sale: "23" },
        { src: fs4, name: "R", prince: "379.00", sale: "4675" },
        { src: fs4, name: "S", prince: "389.00", sale: "467" },
        { src: fs4, name: "T", prince: "399.00", sale: "789" },
        { src: fs4, name: "U", prince: "499.00", sale: "980" },
        { src: fs4, name: "V", prince: "599.00", sale: "456" },
        { src: fs4, name: "W", prince: "479.00", sale: "678" },
        { src: fs4, name: "X", prince: "699.00", sale: "5689" },
        { src: fs4, name: "Y", prince: "899.00", sale: "4355" },
        { src: fs4, name: "Z", prince: "999.00", sale: "9706" },
    ],
    flowers5: [
        { src: fs5, name: "A", prince: "39.00", sale: "1.2万" },
        { src: fs5, name: "B", prince: "29.00", sale: "2.0万" },
        { src: fs5, name: "C", prince: "19.00", sale: "3.2万" },
        { src: fs5, name: "D", prince: "59.00", sale: "3.0万" },
        { src: fs5, name: "E", prince: "79.00", sale: "1.2万" },
        { src: fs5, name: "F", prince: "89.00", sale: "1.1万" },
        { src: fs5, name: "G", prince: "129.00", sale: "1.0万" },
        { src: fs5, name: "H", prince: "128.00", sale: "3.9万" },
        { src: fs5, name: "I", prince: "139.00", sale: "1.4万" },
        { src: fs5, name: "J", prince: "148.00", sale: "2.9万" },
        { src: fs5, name: "K", prince: "178.00", sale: "2.5万" },
        { src: fs5, name: "L", prince: "246.00", sale: "252" },
        { src: fs5, name: "M", prince: "260.00", sale: "2534" },
        { src: fs5, name: "N", prince: "190.00", sale: "354" },
        { src: fs5, name: "O", prince: "189.00", sale: "568" },
        { src: fs5, name: "P", prince: "349.00", sale: "689" },
        { src: fs5, name: "Q", prince: "355.00", sale: "23" },
        { src: fs5, name: "R", prince: "379.00", sale: "4675" },
        { src: fs5, name: "S", prince: "389.00", sale: "467" },
        { src: fs5, name: "T", prince: "399.00", sale: "789" },
        { src: fs5, name: "U", prince: "499.00", sale: "980" },
        { src: fs5, name: "V", prince: "599.00", sale: "456" },
        { src: fs5, name: "W", prince: "479.00", sale: "678" },
        { src: fs5, name: "X", prince: "699.00", sale: "5689" },
        { src: fs5, name: "Y", prince: "899.00", sale: "4355" },
        { src: fs5, name: "Z", prince: "999.00", sale: "9706" },
    ],
    flowers6: [
        { src: fs6, name: "A", prince: "39.00", sale: "1.2万" },
        { src: fs6, name: "B", prince: "29.00", sale: "2.0万" },
        { src: fs6, name: "C", prince: "19.00", sale: "3.2万" },
        { src: fs6, name: "D", prince: "59.00", sale: "3.0万" },
        { src: fs6, name: "E", prince: "79.00", sale: "1.2万" },
        { src: fs6, name: "F", prince: "89.00", sale: "1.1万" },
        { src: fs6, name: "G", prince: "129.00", sale: "1.0万" },
        { src: fs6, name: "H", prince: "128.00", sale: "3.9万" },
        { src: fs6, name: "I", prince: "139.00", sale: "1.4万" },
        { src: fs6, name: "J", prince: "148.00", sale: "2.9万" },
        { src: fs6, name: "K", prince: "178.00", sale: "2.5万" },
        { src: fs6, name: "L", prince: "246.00", sale: "252" },
        { src: fs6, name: "M", prince: "260.00", sale: "2534" },
        { src: fs6, name: "N", prince: "190.00", sale: "354" },
        { src: fs6, name: "O", prince: "189.00", sale: "568" },
        { src: fs6, name: "P", prince: "349.00", sale: "689" },
        { src: fs6, name: "Q", prince: "355.00", sale: "23" },
        { src: fs6, name: "R", prince: "379.00", sale: "4675" },
        { src: fs6, name: "S", prince: "389.00", sale: "467" },
        { src: fs6, name: "T", prince: "399.00", sale: "789" },
        { src: fs6, name: "U", prince: "499.00", sale: "980" },
        { src: fs6, name: "V", prince: "599.00", sale: "456" },
        { src: fs6, name: "W", prince: "479.00", sale: "678" },
        { src: fs6, name: "X", prince: "699.00", sale: "5689" },
        { src: fs6, name: "Y", prince: "899.00", sale: "4355" },
        { src: fs6, name: "Z", prince: "999.00", sale: "9706" },
    ],
    flowers7: [
        { src: fs7, name: "A", prince: "39.00", sale: "1.2万" },
        { src: fs7, name: "B", prince: "29.00", sale: "2.0万" },
        { src: fs7, name: "C", prince: "19.00", sale: "3.2万" },
        { src: fs7, name: "D", prince: "59.00", sale: "3.0万" },
        { src: fs7, name: "E", prince: "79.00", sale: "1.2万" },
        { src: fs7, name: "F", prince: "89.00", sale: "1.1万" },
        { src: fs7, name: "G", prince: "129.00", sale: "1.0万" },
        { src: fs7, name: "H", prince: "128.00", sale: "3.9万" },
        { src: fs7, name: "I", prince: "139.00", sale: "1.4万" },
        { src: fs7, name: "J", prince: "148.00", sale: "2.9万" },
        { src: fs7, name: "K", prince: "178.00", sale: "2.5万" },
        { src: fs7, name: "L", prince: "246.00", sale: "252" },
        { src: fs7, name: "M", prince: "260.00", sale: "2534" },
        { src: fs7, name: "N", prince: "190.00", sale: "354" },
        { src: fs7, name: "O", prince: "189.00", sale: "568" },
        { src: fs7, name: "P", prince: "349.00", sale: "689" },
        { src: fs7, name: "Q", prince: "355.00", sale: "23" },
        { src: fs7, name: "R", prince: "379.00", sale: "4675" },
        { src: fs7, name: "S", prince: "389.00", sale: "467" },
        { src: fs7, name: "T", prince: "399.00", sale: "789" },
        { src: fs7, name: "U", prince: "499.00", sale: "980" },
        { src: fs7, name: "V", prince: "599.00", sale: "456" },
        { src: fs7, name: "W", prince: "479.00", sale: "678" },
        { src: fs7, name: "X", prince: "699.00", sale: "5689" },
        { src: fs7, name: "Y", prince: "899.00", sale: "4355" },
        { src: fs7, name: "Z", prince: "999.00", sale: "9706" },
    ],
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
    moveto({ commit },val) {
        commit('moveto',val)
    }
}



const mutations = {
    flowerlistchange(state, val) {
        if (val == "New") {
            state.flowers = state.flowers1;
            state.haveflower = true;
            state.emptyflower = false
        } else if (val == "Love") {
            state.flowers = state.flowers2;
            state.haveflower = true;
            state.emptyflower = false
        } else if (val == "Friend") {
            state.flowers = state.flowers3;
            state.haveflower = true;
            state.emptyflower = false
        }
        else if (val == "Basket") {
            state.flowers = state.flowers4;
            state.haveflower = true;
            state.emptyflower = false
        }
        else if (val == "Box") {
            state.flowers = state.flowers5;
            state.haveflower = true;
            state.emptyflower = false
        }
        else if (val == "Cake") {
            state.flowers = state.flowers6;
            state.haveflower = true;
            state.emptyflower = false
        }
        else if (val == "Plant") {
            state.flowers = state.flowers7;
            state.haveflower = true;
            state.emptyflower = false
        } else if (val == "") {
            state.flowers = [];
            state.emptyflower = true
        }
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
    moveto(state,val) {
        state.moveto = true
        if (val == "New") {
            state.flowers = state.flowers1;
        } else if (val == "Love") {
            state.flowers = state.flowers2;
        } else if (val == "Friend") {
            state.flowers = state.flowers3;
        }
        else if (val == "Basket") {
            state.flowers = state.flowers4;
        }
        else if (val == "Box") {
            state.flowers = state.flowers5;
        }
        else if (val == "Cake") {
            state.flowers = state.flowers6;
        }
        else if (val == "Plant") {
            state.flowers = state.flowers7;
        }
    },
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

