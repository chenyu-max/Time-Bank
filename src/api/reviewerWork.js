import axios from './axios';

export default {
  addProjectList(params) {
    return axios.get('/api/addprojectlist', { params });
  },
  addProjectDetail(params) {
    return axios.get('/api/addprojectdetail', { params });
  },
  declareProjectList(params) {
    return axios.get('/api/declareprojectlist', { params });
  },
  declareProjectDetail(params) {
    return axios.get('/api/declareprojectdetail', { params });
  },
  reportReviewList(params) {
    return axios.get('/api/reportreviewlist', params);
  },
  sendAddProjectResult(params) {
    return axios.post('/api/addproject/result', params);
  },
  sendDeclareProjectResult(params) {
    return axios.post('/api/declareproject/result', params);
  },
};
