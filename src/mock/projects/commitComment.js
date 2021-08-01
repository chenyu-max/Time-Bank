import Mock from 'mockjs';

Mock.mock('/api/comment', 'post', {
  code: 0,
  msg: '',
  data: null,
});
