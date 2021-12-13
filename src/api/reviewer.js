import axios from './axios';

export default {
  applyToBeReviewer(params) {
    return axios.post('/api/applyreviewer', params);
  },
  getReviewerInfo(params) {
    return axios.get('/api/getreviewerinfo', { params });
  },
  vote(params) {
    return axios.post('/api/vote', params);
  },
  getCandidateInfoById(params) {
    return axios.get('/api/candidateinfo', { params });
  },
  getReviewerList(params) {
    return axios.get('/api/reviewerlist', { params });
  },
};
