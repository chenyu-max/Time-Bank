import Mock from 'mockjs';

Mock.mock('/api/newproject', 'put', {
  msg: '',
  code: 0,
  data: null,
});
