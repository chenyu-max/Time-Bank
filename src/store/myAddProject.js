export default {
  namespaced: true,
  state: {
    waitList: [],
    doingList: [],
    finishList: [],
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
    deleteAll({ commit }) {
      commit('deleteAll');
    },
  },
};
