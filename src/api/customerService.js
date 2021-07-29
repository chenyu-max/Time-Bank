import axios from './axios';

export default {
  sendMsgToAI(params) {
    return axios.post('/api/sendmsgtoai', params);
  },
};
