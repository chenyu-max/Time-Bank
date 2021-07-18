export default {
  namespaced: true,
  state: {
    // 存储菜单的路由
    menuRoutes: [],
  },
  mutations: {
    changeMenuRoutes(state, routes) {
      state.menuRoutes = routes;
    },
  },
  actions: {
    changeMenuRoutes({ commit }, routes) {
      commit('changeMenuRoutes', routes);
    },
  },
};
