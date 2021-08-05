import Mock from 'mockjs';

Mock.mock('/api/newproject', 'post', {
  code: 0,
  msg: '',
  data: null,
});
