import Mock from 'mockjs';

Mock.mock('/api/getshoplist', 'get', {
  code: 0,
  msg: '',
  'data|3-28': [
    {
      goodsId: '@guid',
      name: '@cword(3,7)',
      'value|1-20.1': 0,
      img: '@image(240x240, @color, #fff, @natural)',
      'total|1-20': 0, // 库存
    },
  ],
});
