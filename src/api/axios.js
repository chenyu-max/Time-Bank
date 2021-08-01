import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use((response) => {
  if (response.data.code !== 0) {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
}, (error) => Promise.reject(error));

export default instance;
