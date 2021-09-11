import Mock from 'mockjs';

Mock.mock('/api/candidateinfo', 'get', {
  code: 0,
  msg: '',
  data: {
    name: '@cname', // 候选人用户名
    'level|1-8': 0, // 候选人等级
    'workTime|40-60': 0, // 候选人志愿服务时长
    xuanyan: '@cparagraph(1,3)', // 候选人宣言
    desc: '@cparagraph(3,5)', // 候选人申请理由
    'reviewerDays|0-8': 0, // 当过审核人的天数
  },
});
