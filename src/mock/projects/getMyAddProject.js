import Mock from 'mockjs';

Mock.mock('/api/myaddproject', 'get', {
  code: 0,
  msg: '',
  data: {
    'doing|3-30': [
      {
        id: '@guid',
        projectName: '@cword(4,6)',
        description: '@cword(50-70)',
        'needPeople|3-9': 0,
        'category|1': ['照顾老人', '帮忙做事', '照顾小孩'],
        'value|1-7.2': 0,
        'workTime|1-6.1': 0,
        address: '@county(true)',
        contactPersonName: '@cname',
        'contactPersonSex|1': ['male', 'female'],
        contactPersonPhone: /^1[3456789]\d{9}$/,
        startTime: '@datetime("yyyy-MM-dd HH:mm")',
        endTime: '@datetime("yyyy-MM-dd HH:mm")',
      },
    ],
    'waitCheck|13-30': [
      {
        id: '@guid',
        projectName: '@cword(4,6)',
        description: '@cparagraph(3,4)',
        'needPeople|3-9': 0,
        'category|1': ['照顾老人', '帮忙做事', '照顾小孩'],
        'value|1-7.2': 0,
        'workTime|1-6.1': 0,
        address: '@county(true)',
        contactPersonName: '@cname',
        'contactPersonSex|1': ['male', 'female'],
        contactPersonPhone: /^1[3456789]\d{9}$/,
        startTime: '@datetime("yyyy-MM-dd HH:mm")',
        endTime: '@datetime("yyyy-MM-dd HH:mm")',
      },
    ],
    'finish|4-14': [
      {
        id: '@guid',
        projectName: '@cword(4,6)',
        description: '@cword(50-70)',
        'needPeople|3-9': 0,
        'category|1': ['照顾老人', '帮忙做事', '照顾小孩'],
        'value|1-7.2': 0,
        'workTime|1-6.1': 0,
        address: '@county(true)',
        contactPersonName: '@cname',
        'contactPersonSex|1': ['male', 'female'],
        contactPersonPhone: /^1[3456789]\d{9}$/,
        startTime: '@datetime("yyyy-MM-dd HH:mm")',
        endTime: '@datetime("yyyy-MM-dd HH:mm")',
      },
    ],
  },
});
