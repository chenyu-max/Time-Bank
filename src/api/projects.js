// 对于项目操作的接口管理
import axios from './axios';

export default {
  getProjectsList(params) {
    return axios.get('/api/projectslist', params);
  },
  getProjectById(params) {
    return axios.get('/api/projectbyid', params);
  },
  getMyProjectHistory(params) {
    return axios.get('/api/myproject', params);
  },
  commitComment(params) {
    return axios.post('/api/comment', params);
  },
  acceptProject(params) {
    return axios.post('/api/acceptproject', params);
  },
};
