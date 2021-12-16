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
        target: 'http://192.168.43.65:8080/tb/',
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/time-bank-show-page/'
    : '/',
};
