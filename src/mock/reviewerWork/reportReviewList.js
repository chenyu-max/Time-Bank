import Mock from 'mockjs';

Mock.mock('/api/reportreviewlist', 'get', {
  code: 0,
  msg: '',
  data: {
    'ingProject|5-17': 0, // 等待审核的项目
    'overProject|7-17': 0, // 审核完成的项目
    'list|13-33': [
      {
        reportId: '@id', // 被举报的
        reportName: '@cword(4,7)', // 被举报的对象
        desc: '@cparagraph(1,3)', // 举报理由
        time: '@datetime("yyyy-MM-dd HH:mm")', // 举报任务创建提交时间
        'category|1': ['举报项目', '举报审核人', '举报发起者'], // 举报类型 ['举报项目','举报审核人','举报发起者']
        ownerName: '@cname', // 举报人
        ownerId: '@id', // 举报人id
        'agree|0-10': 0, // 同意票数
        'reject|0-10': 0, // 拒绝票数
        'state|1': ['over', 'ing'], // over：已审核  ing：待审核
        'tips|1': ['back', 'ing', 'agree'], // back： 已打回
        // proveImage: '@image(46x46, @color, #fff, @natural)', // 举报证据
      },
    ],
  },
});
