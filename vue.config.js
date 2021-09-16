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
        target: 'http://test.time-bank.com',
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/time-bank-show-page/'
    : '/',
};
