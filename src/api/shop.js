import axios from './axios';

export default {
  getShopList(params) {
    return axios.get('/api/getshoplist', params);
  },
  getGoodsDetails(params) {
    return axios.get('/api/getgoodsdetails', params);
  },
};
