import Mock from 'mockjs';

Mock.mock('/api/goodsdetails', 'get', {
  code: 0,
  msg: '',
  data: {
    goodsName: '@cword(20,38)',
    'goodsNumber|10000-15000': 0, // 商品数字编号
    'goodsTotal|0-20': 0, // 商品库存
    'goodsValue|0-15.2': 0, // 商品价值
    'saleNumber|0-10': 0, // 已兑换数量
    'goodsTitleImgList|3-4': ['@image(400x400, @color, #fff, @natural)'], // 商品轮播图展示的图片信息数组
    'goodsInfoImg|4-8': ['@image(400x400, @color, #fff, @natural)'], // 存放物品的具体信息图片数组
  },
});
