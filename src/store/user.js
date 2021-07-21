import { setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';

export default {
  namespaced: true,
  state: {
    // 用户信息
    userinfo: {
      ...getUserCookie(),
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userinfo = userInfo;
    },
    logout(state) {
      state.userinfo = {
        username: '',
        appkey: '',
        role: '',
        phoneNumber: '',
        avatarUrl: '',
        userIDNumber: '',
        userRealName: '',
        userBirthday: '',
        userMoney: '',
        userWorkTime: '',
      };
    },
  },
  actions: {
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    logout({ commit }) {
      commit('logout');
      removeUserCookie();
    },
  },
};
