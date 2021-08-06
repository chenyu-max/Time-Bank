import axios from './axios';

export default {
  addNewProject(params) {
    return axios.post('/api/newproject', params);
  },
  getMyAddProject(params) {
    return axios.get('/api/myaddproject', params);
  },
  changeProjectInfo(params) {
    return axios.put('/api/newproject', params);
  },
};
