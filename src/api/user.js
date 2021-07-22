// 对于用户操作的接口管理
import axios from './axios';

export default {
  login(params) {
    return axios.post('/api/passport/login', params);
  },
  register(params) {
    return axios.post('/api/passport/register', params);
  },
  findBackPassword(params) {
    return axios.post('/api/passport/findBack', params);
  },
  getCode(email) {
    return axios.post('/api/passport/getCode', email);
  },
  changeUserInfo(params) {
    return axios.put('/api/userinfo/submit', params);
  },
  changePassword(params) {
    return axios.put('/api/passport/changepwd', params);
  },
};