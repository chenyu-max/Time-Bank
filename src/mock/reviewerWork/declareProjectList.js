import Mock from 'mockjs';

Mock.mock('/api/declareprojectlist', 'get', {
  code: 0,
  msg: '',
  data: {
    'ingProject|5-17': 0, // 等待审核的项目
    'overProject|7-17': 0, // 审核完成的项目
    'list|13-33': [
      {
        projectId: '@id',
        projectName: '@cword(4,7)',
        desc: '@cparagraph(1,3)', // 简介
        owner: '@cname', // 发起人
        overTime: '@datetime("yyyy-MM-dd HH:mm")', // 完成的时间
        'agree|0-10': 0, // 同意票数
        'reject|0-10': 0, // 拒绝票数
        'state|1': ['over', 'ing'], // over：已审核  ing：待审核
      },
    ],
  },
});
