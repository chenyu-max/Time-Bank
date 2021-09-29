import Mock from 'mockjs';

Mock.mock('/api/reviewerlist', 'get', {
  code: 0,
  msg: '',
  'data|21': [
    {
      avatar: '@image(32x32, @color, #fff, @natural)', // 审核人头像
      name: '@cname', // 用户名,
      declaration: '@cparagraph(1,2)',
      'tasksNumber|5-7': 0, // 一天到目前位置处理的任务数量（总）
      'reportTasks|1-5': 0, // 举报处理数量
      'reviewTasks|8-10': 0, // 审核处理数量
      'reviewAddTasks|4-5': 0, // 审核项目添加任务数量
      'reviewDeclareTasks|3-4': 0, // 审核项目申报任务数量
      id: '@id', // 审核人ID
    },
  ],
});
