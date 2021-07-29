export default {
  namespaced: true,
  state: {
    AIHistory: [],
    menHistory: [],
  },
  mutations: {
    changeAIHistory(state, history) {
      state.AIHistory = history;
    },
    changeMenHistory(state, history) {
      state.menHistory = history;
    },
    logout(state) {
      state.AIHistory = [];
      state.menHistory = [];
    },
  },
  actions: {
    changeAIHistory({ commit }, history) {
      commit('changeAIHistory', history);
    },
    changeMenHistory({ commit }, history) {
      commit('changeMenHistory', history);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
};
