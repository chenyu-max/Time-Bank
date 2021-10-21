import Mock from 'mockjs';

Mock.mock('/api/addprojectdetail', 'get', {
  code: 0,
  msg: '',
  data: {
    projectName: '@cword(3,5)', // 项目名称
    projectId: '@id', // 项目id
    desc: '@cparagraph(2)', // 项目描述
    'needPeople|1-10': 0, // 项目所需人数
    'category|1': ['帮助老人', '照顾小孩', '帮忙做事'], // 项目分类
    'value|3-8.2': 0, // 项目单人支付时间币
    'workTime|1-4.2': 0, // 项目需要的工作时间
    address: '@county(true)', // 项目地址
    contactName: 'cname', // 项目联系人姓名
    'contactSex|1': ['male', 'female'], // 项目联系人性别
    contactPhone: /^1[3456789]\d{9}$/, // 项目联系人电话
    startTime: '@datetime("yyyy-MM-dd HH:mm")', // 项目开始时间
    endTime: '@datetime("yyyy-MM-dd HH:mm")', // 项目结束时间
  },
});
