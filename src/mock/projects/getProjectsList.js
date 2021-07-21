import Mock from 'mockjs';

Mock.mock('/api/getProjectsList', 'get', {
  code: 0,
  msg: '',
  data: {
    'total|10-100': 0,
    category: ['帮助老人', '帮助小孩', '照看系列', '寻找系列'],
    'list|10-100': [{
      id: '@guid',
      name: '@cword(3,7)',
      ownerName: '@cname',
      'value|0-10.2': 0,
      'time|0-5.1': 1,
      'state|1': ['可承接', '已满员', '已完成'],
      'category|1': ['帮忙做事', '照顾小孩', '照顾老人'],
      createTime: '@datetime("yyyy-MM-dd HH:mm")',
      startTime: '@datetime("yyyy-MM-dd HH:mm")',
      endTime: '@datetime("yyyy-MM-dd HH:mm")',
    }],
  },
});
