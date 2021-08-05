import axios from './axios';

export default {
  addNewProject(params) {
    return axios.post('/api/newproject', params);
  },
};
