export default {
  namespaced: true,
  state: {
    nowInfo: {},
  },
  mutations: {
    changeNowInfo(state, info) {
      state.nowInfo = info;
    },
    deleteInfo(state) {
      state.nowInfo = {};
    },
  },
  actions: {
    changeNowInfo({ commit }, info) {
      commit('changeNowInfo', info);
    },
    deleteInfo({ commit }) {
      commit('deleteInfo');
    },
  },
};
