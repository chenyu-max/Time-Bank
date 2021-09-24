import Mock from 'mockjs';

Mock.mock('/api/volunteerlist', 'get', {
  code: 0,
  msg: '',
  'data|13-33': [
    {
      userId: '@id',
      userName: '@cname',
      'level|1-7': 0,
      projectId: '@id',
      projectName: '@cword(3,5)',
      time: '@datetime("yyyy-MM-dd HH:mm:ss")',
      'workTime|10-50': 0,
      'cishu|5-20': 0, // 完成项目的次数
    },
  ],
});
