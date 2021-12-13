import Mock from 'mockjs';

Mock.mock('/api/declareprojectdetail', 'get', {
  code: 0,
  msg: '',
  data: {
    projectName: '@cword(3,5)', // 项目名称
    projectId: '@id', // 项目id
    'needPeople|1-10': 0, // 项目所需人数
    'category|1': ['帮助老人', '照顾小孩', '帮忙做事'], // 项目分类
    'value|3-8.2': 0, // 项目单人支付时间币
    'workTime|1-4.2': 0, // 项目需要的工作时间
    address: '@county(true)', // 项目地址
    contactName: 'cname', // 项目联系人姓名
    startTime: '@datetime("yyyy-MM-dd HH:mm")', // 项目开始时间
    endTime: '@datetime("yyyy-MM-dd HH:mm")', // 项目结束时间
    'userList|1-5': [
      {
        userAvatar: '@image(32x32, @color, #fff, @natural)',
        username: '@cname', // 参与用户用户名
        overTime: '@datetime("yyyy-MM-dd HH:mm")',
        'workTime|1-6.1': 0, // 参与用户工作时间
        userComment: '@cparagraph(3,4)', // 参与用户的评论信息
        'userStar|1-5': 0,
      },
    ], // 用户评论列表
    remarkText: '@cparagraph(2)', // 备注
  },
});
