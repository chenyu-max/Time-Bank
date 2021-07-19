import { deleteCityCookie, getCityCookie, setCityCookie } from '../utils/cityCookie';

export default {
  namespaced: true,
  state: {
    // 用户信息
    nowCityList: getCityCookie(),
  },
  mutations: {
    setNowCityList(state, nowCityList) {
      state.nowCityList = nowCityList;
      setCityCookie(nowCityList);
    },
    deleteNowCityList(state) {
      state.nowCityList = [];
    },
  },
  actions: {
    setNowCityList({ commit }, nowCityList) {
      commit('setNowCityList', nowCityList);
    },
    deleteNowCityList({ commit }) {
      commit('deleteNowCityList');
      deleteCityCookie();
    },
  },
};
