export default {
  namespaced: true,
  state: {
    // 用于切换菜单的闭合状态   false 代表不闭合   true 代表闭合
    collapsed: false,
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
  },
};
