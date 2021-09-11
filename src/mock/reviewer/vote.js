import Mock from 'mockjs';

Mock.mock('/api/vote', 'post', {
  code: 0,
  msg: '',
  data: null,
});
