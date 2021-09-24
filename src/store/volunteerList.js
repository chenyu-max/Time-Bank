export default {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    changeList(state, list) {
      state.list = list;
    },
  },
  actions: {
    changeList({ commit }, list) {
      commit('changeList', list);
    },
  },
};
