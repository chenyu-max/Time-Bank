/*
 * @Description:
 * @Author: chenyu76
 * @Date: 2022-04-10 20:54:31
 * @LastEditTime: 2023-03-14 18:12:34
 * @LastEditors: chenyu76
 */
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://192.168.43.94:8080/timebank/',
        // target: 'http://192.168.43.94:8088/timebank2/',
        // target: 'http://192.168.43.65:8080/tb/',
        target: 'http://localhost:8080/tb',
      },
    },
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/time-bank-show-page/'
  //   : '/',
};
