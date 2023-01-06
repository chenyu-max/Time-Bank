/*
 * @Description:
 * @Author: chenyu76
 * @Date: 2022-04-10 20:54:31
 * @LastEditTime: 2022-11-06 17:52:34
 * @LastEditors: chenyu76
 */
import axios from './axios';

export default {
  addProjectList(params) {
    return axios.get('/api/addprojectlist', params);
    // return axios.get('/api/addprojectlist', { params });
  },
  addProjectDetail(params) {
    // return axios.get('/api/addprojectdetail', { params });
    return axios.get('/api/addprojectdetail', params);
  },
  declareProjectList(params) {
    return axios.get('/api/declareprojectlist', params);
    // return axios.get('/api/declareprojectlist', { params });
  },
  declareProjectDetail(params) {
    // return axios.get('/api/declareprojectdetail', { params });
    return axios.get('/api/declareprojectdetail', params);
  },
  reportReviewList(params) {
    return axios.get('/api/reportreviewlist', { params });
  },
  sendAddProjectResult(params) {
    return axios.post('/api/addproject/result', params);
  },
  sendDeclareProjectResult(params) {
    return axios.post('/api/declareproject/result', params);
  },
  sendReportResult(params) {
    return axios.post('/api/report/result', params);
  },
};
