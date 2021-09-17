import axios from './axios';

export default {
  reportProject(params) {
    return axios.post('/api/reportproject', params);
  },
  reportOriginator(params) {
    return axios.post('/api/reportoriginator', params);
  },
  reportReviewer(params) {
    return axios.post('/api/reportreviewer', params);
  },
};
