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
    setUserMoney(state, money) {
      state.userMoney = money;
      setCookie(state.userInfo);
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
    setUserMoney({ commit }, money) {
      commit('setUserMoney', money);
    },
    logout({ commit }) {
      commit('logout');
      removeUserCookie();
    },
  },
};
