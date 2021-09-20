export default {
  namespaced: true,
  state: {
    certification: 1,
  },
  mutations: {
    changeCertification(state, history) {
      state.certification = history;
    },
  },
  actions: {
    changeCertification({ commit }, history) {
      commit('changeCertification', history);
    },
  },
};
