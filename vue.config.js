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
        target: 'http://192.168.43.65:8080/timebank/',
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/time-bank-show-page/'
    : '/',
};
