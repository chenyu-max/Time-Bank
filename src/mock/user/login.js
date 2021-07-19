import Mock from 'mockjs';

Mock.mock('/api/passport/login', 'post', {
  code: 0,
  msg: '',
  data: {
    appkey: '@guid',
    username: '@cname',
    email: '@email',
    phoneNumber: /^1[3456789]d{9}$/,
    'role|1': ['generalUser', 'Reviewer'],
    avatarUrl: '@image(32x32, @color, #fff, @natural)',
    userIDNumber: '@guid',
    userRealName: '@cname',
    userBirthday: '@datetime',
    'userMoney|1-100.2': 1,
    'userWorkTime|1-100.2': 1,
  },
});
