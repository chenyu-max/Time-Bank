import axios from './axios';

export default {
  getCityList(params) {
    return axios.get('/api/citylist', params);
  },
};
