import axios from './axios';

export default {
  addProjectList(params) {
    return axios.get('/api/addprojectlist', params);
  },
  declareProjectList(params) {
    return axios.get('/api/declareprojectlist', params);
  },
  reportReviewList(params) {
    return axios.get('/api/reportreviewlist', params);
  },
};
