import Mock from 'mockjs';

Mock.mock('/api/msgtomen', 'post', {
  code: 0,
  msg: '',
  'data|1-3': ['@csentence(15, 30)'],
});
