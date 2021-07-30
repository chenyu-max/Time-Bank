import axios from './axios';

export default {
  getShopList(params) {
    return axios.get('/api/shoplist', params);
  },
  getGoodsDetails(params) {
    return axios.get('/api/goodsdetails', params);
  },
};
