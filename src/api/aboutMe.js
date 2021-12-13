import axios from './axios';

export default {
  getAboutMeList(params) {
    return axios.get('/api/aboutmelist', params);
  },
};
