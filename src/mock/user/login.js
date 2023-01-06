/*
 * @Description:
 * @Author: chenyu76
 * @Date: 2022-04-10 20:54:31
 * @LastEditTime: 2022-11-06 17:20:56
 * @LastEditors: chenyu76
 */
import Mock from 'mockjs';

Mock.mock('/api/login', 'post', {
  code: 0,
  msg: '',
  data: {
    appkey: '@guid',
    username: '@cname',
    phoneNumber: /^1[3456789]\d{9}$/,
    // 'role|1': ['generalUser', 'Reviewer'],
    role: 'Reviewer',
    avatarUrl: '@image(32x32, @color, #fff, @natural)',
    userIDNumber: '@guid',
    userRealName: '@cname',
    userBirthday: '@datetime',
    'userMoney|1-100.2': 1,
    'userWorkTime|1-100.2': 1,
  },
});
