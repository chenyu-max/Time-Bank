import Mock from 'mockjs';

Mock.mock('/api/acceptproject', 'post', {
  code: 0,
  msg: '',
  data: null,
});
