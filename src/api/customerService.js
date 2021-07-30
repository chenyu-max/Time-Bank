import axios from './axios';

export default {
  sendMsgToAI(params) {
    return axios.post('/api/msgtoai', params);
  },
  menServiceInit(params) {
    return axios.post('/api/menserviceinit', params);
  },
  sendMsgToMen(params) {
    return axios.post('/api/msgtomen', params);
  },
};
