export default {
  namespaced: true,
  state: {
    commentsList: [],
    doingList: [],
    finishList: [],
  },
  mutations: {
    changeCommentsList(state, list) {
      state.commentsList = list;
    },
    changeDoingList(state, list) {
      state.doingList = list;
    },
    changeFinishList(state, list) {
      state.finishList = list;
    },
    deleteAll(state) {
      state.commentsList = [];
      state.doingList = [];
      state.finishList = [];
    },
  },
  actions: {
    changeCommentsList({ commit }, list) {
      commit('changeCommentsList', list);
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
