/*
 * @Description:
 * @Author: chenyu76
 * @Date: 2022-04-10 20:54:31
 * @LastEditTime: 2022-11-06 17:53:16
 * @LastEditors: chenyu76
 */
// 对于用户操作的接口管理
import axios from './axios';

export default {
  login(params) {
    return axios.post('/api/login', params);
  },
  getUserInfo(params) {
    // return axios.get('/api/getuserinfo', { params });
    return axios.get('/api/getuserinfo', params);
  },
  register(params) {
    return axios.post('/api/passport/register', params);
  },
  findBackPassword(params) {
    return axios.post('/api/passport/findback', params);
  },
  getCode(email) {
    return axios.post('/api/passport/phonecode', email);
  },
  changeUserInfo(params) {
    return axios.put('/api/userinfo/submit', params);
  },
  changePassword(params) {
    return axios.put('/api/passport/changepwd', params);
  },
};
