import Mock from 'mockjs';

Mock.mock('/api/getreviewerinfo', 'get', {
  code: 0,
  msg: '',
  data: {
    likeName: null,
    'candidate|11-31': [
      {
        name: '@cname', // 候选人用户名
        id: '@id', // 候选人id
        avatar: '@image(32x32, @color, #fff, @natural)', // 候选人头像
        xuanyan: '@cparagraph(1,3)', // 候选人竞争宣言
        'votes|3-18': 0, // 候选人票数
      },
    ],
  },
});
