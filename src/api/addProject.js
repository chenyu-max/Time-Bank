/*
 * @Description:
 * @Author: chenyu76
 * @Date: 2022-04-10 20:54:31
 * @LastEditTime: 2023-03-14 18:42:37
 * @LastEditors: chenyu76
 */
import axios from './axios';

export default {
  addNewProject(params) {
    return axios.post('/api/newproject', params);
  },
  getMyAddProject(params) {
    // return axios.get('/api/myaddproject', { params });
    return axios.get('/api/myaddproject', { params });
  },
  changeProjectInfo(params) {
    return axios.post('/api/projectinfo', params);
  },
  declareProject(params) {
    return axios.post('/api/declareproject', params);
  },
  getVolunteerList(params) {
    return axios.get('/api/volunteerlist', { params });
    // return axios.get('/api/volunteerlist', { params });
  },
  volunteerApply(params) {
    return axios.post('/api/volunteerapply', params);
  },
};
