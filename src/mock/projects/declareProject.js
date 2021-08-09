import Mock from 'mockjs';

Mock.mock('/api/declareproject', 'post', {
  code: 0,
  msg: '',
  data: null,
});
