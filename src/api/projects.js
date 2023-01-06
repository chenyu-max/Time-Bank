/*
 * @Description:
 * @Author: chenyu76
 * @Date: 2022-04-10 20:54:31
 * @LastEditTime: 2022-11-06 17:51:45
 * @LastEditors: chenyu76
 */
// 对于项目操作的接口管理
import axios from './axios';

export default {
  getProjectsList(params) {
    return axios.get('/api/projectslist', params);
    // return axios.get('/api/projectslist', { params });
  },
  getProjectById(params) {
    return axios.get('/api/projectbyid', params);
    // return axios.get('/api/projectbyid', { params });
  },
  getMyProjectHistory(params) {
    return axios.get('/api/myproject', params);
    // return axios.get('/api/myproject', { params });
  },
  commitComment(params) {
    return axios.post('/api/comment', params);
  },
  acceptProject(params) {
    return axios.post('/api/acceptproject', params);
  },
};
