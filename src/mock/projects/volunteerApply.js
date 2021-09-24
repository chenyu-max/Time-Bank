import Mock from 'mockjs';

Mock.mock('/api/volunteerapply', 'post', {
  msg: '',
  code: 0,
  data: {},
});
