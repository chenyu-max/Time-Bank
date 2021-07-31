import Mock from 'mockjs';

Mock.mock('/api/myproject', 'get', {
  code: 0,
  msg: '',
  data: {
    'doing|14-38': [
      {
        id: '@guid',
        name: '@cword(3,7)',
        ownerName: '@cname',
        'value|0-10.2': 0,
        'time|0-5.1': 1,
        'category|1': ['帮忙做事', '照顾小孩', '照顾老人'],
        acceptTime: '@datetime("yyyy-MM-dd HH:mm")',
        startTime: '@datetime("yyyy-MM-dd HH:mm")',
        endTime: '@datetime("yyyy-MM-dd HH:mm")',
      },
    ],
    'waitForComment|3-16': [
      {
        id: '@guid',
        name: '@cword(3,7)',
        ownerName: '@cname',
        'value|0-10.2': 0,
        'time|0-5.1': 1,
        'category|1': ['帮忙做事', '照顾小孩', '照顾老人'],
        finishTime: '@datetime("yyyy-MM-dd HH:mm")',
        startTime: '@datetime("yyyy-MM-dd HH:mm")',
        endTime: '@datetime("yyyy-MM-dd HH:mm")',
      },
    ],
    'finish|11-38': [
      {
        id: '@guid',
        name: '@cword(3,7)',
        ownerName: '@cname',
        'value|0-10.2': 0,
        'time|0-5.1': 1,
        'category|1': ['帮忙做事', '照顾小孩', '照顾老人'],
        finishTime: '@datetime("yyyy-MM-dd HH:mm")',
        startTime: '@datetime("yyyy-MM-dd HH:mm")',
        endTime: '@datetime("yyyy-MM-dd HH:mm")',
      },
    ],
  },
});
