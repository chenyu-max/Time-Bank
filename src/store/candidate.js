export default {
  namespaced: true,
  state: {
    candidateId: '',
  },
  mutations: {
    changeCandidateId(state, history) {
      state.candidateId = history;
    },
  },
  actions: {
    changeCandidateId({ commit }, history) {
      commit('changeCandidateId', history);
    },
  },
};
