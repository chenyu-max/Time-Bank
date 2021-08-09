export default {
  namespaced: true,
  state: {
    waitList: [],
    doingList: [],
    finishList: [],
    declareList: [],
  },
  mutations: {
    changeWaitList(state, list) {
      state.waitList = list;
    },
    changeDoingList(state, list) {
      state.doingList = list;
    },
    changeFinishList(state, list) {
      state.finishList = list;
    },
    changeDeclareList(state, id) {
      state.declareList.push(id);
    },
    deleteAll(state) {
      state.waitList = [];
      state.doingList = [];
      state.finishList = [];
    },
  },
  actions: {
    changeWaitList({ commit }, list) {
      commit('changeWaitList', list);
    },
    changeDoingList({ commit }, list) {
      commit('changeDoingList', list);
    },
    changeFinishList({ commit }, list) {
      commit('changeFinishList', list);
    },
    changeDeclareList({ commit }, list) {
      commit('changeDeclareList', list);
    },
    deleteAll({ commit }) {
      commit('deleteAll');
    },
  },
};
