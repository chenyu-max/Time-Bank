import Mock from 'mockjs';

Mock.mock('/api/projectbyid', 'get', {
  code: 0,
  msg: '',
  data: {
    id: '@guid',
    name: '@cword(3,7)',
    ownerName: '@cname',
    contactPerson: {
      name: '@cname',
      phone: /^1[3456789]\d{9}$/,
      'sex|1': ['male', 'female'],
    },
    'value|0-10.2': 0,
    'time|0-5.1': 1,
    address: '@county(true)',
    workTime: '@datetime("yyyy-MM-dd HH:mm")',
    'needPeople|1-10': 0,
    'nowPeople|1-10': 0,
    'state|1': ['可承接', '已满员', '已完成'],
    'category|1': ['帮忙做事', '照顾小孩', '照顾老人'],
    createTime: '@datetime("yyyy-MM-dd HH:mm")',
    startTime: '@datetime("yyyy-MM-dd HH:mm")',
    endTime: '@datetime("yyyy-MM-dd HH:mm")',
    description: '@cparagraph(9,15)',
    'userList|0-7': [
      {
        userName: '@cname',
        userAvatar: '@image(32x32, @color, #fff, @natural)',
        'userState|1': ['已完成', '正在进行中'],
        acceptTime: '@datetime("yyyy-MM-dd HH:mm")',
        overTime: '@datetime("yyyy-MM-dd HH:mm")',
        userComment: '@cparagraph',
        'star|0-5': 0,
      },
    ],
  },
});
