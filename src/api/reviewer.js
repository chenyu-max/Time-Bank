/*
 * @Description:
 * @Author: chenyu76
 * @Date: 2022-04-10 20:54:31
 * @LastEditTime: 2022-11-06 17:51:59
 * @LastEditors: chenyu76
 */
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
