import Mock from 'mockjs';

Mock.mock('/api/menserviceinit', 'post', {
  code: 0,
  msg: '',
  data: {
    name: '@cname', // 人工客服名字 如 小王、小李等
  },
});
