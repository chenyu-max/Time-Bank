import Mock from 'mockjs';

Mock.mock('/api/aboutmelist', 'get', {
  code: 0,
  msg: '',
  'data|7': [
    {
      avatar: '@image(32x32, @color, #fff, @natural)', // 审核人头像
      name: '@cname', // 用户名,
      declaration: '@cparagraph(1,2)',
      tdDate: '@datetime("MM-dd")',
      'tasksNumber|5-7': 0, // 一天到目前位置处理的任务数量（总）
      'reportTasks|1-5': 0, // 举报处理数量
      'reviewTasks|8-10': 0, // 审核处理数量
      'reviewAddTasks|4-5': 0, // 审核项目添加任务数量
      'reviewDeclareTasks|3-4': 0, // 审核项目申报任务数量
      id: '@id', // 审核人ID
      'newsStatus|1': ['processing', 'null'],
      'newsport|1': ['中国青年志愿者微信公号', '中国青年报'],
      'newsText|1': ['两个老朋友的云端约会',
        '重磅！中国青年志愿者代表在全球志愿服务技术会议上发声',
        '联合国召开会议，中国青年的表现亮了', '联合国志愿人员组织致敬战疫志愿者',
        '联合国秘书长青年特使的一封信：我们同中国青年在一起'],
    },
  ],
});
