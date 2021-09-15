import Mock from 'mockjs';
import goods1Top1 from '../../assets/shopImage/goods_1/top_1.png';
import goods1Top2 from '../../assets/shopImage/goods_1/top_2.png';
import goods1Top3 from '../../assets/shopImage/goods_1/top_3.png';
import goods1Top4 from '../../assets/shopImage/goods_1/top_4.png';
import goods1Down1 from '../../assets/shopImage/goods_1/down_1.png';
import goods1Down2 from '../../assets/shopImage/goods_1/down_2.png';
import goods1Down3 from '../../assets/shopImage/goods_1/down_3.png';
import goods1Down4 from '../../assets/shopImage/goods_1/down_4.png';
import goods1Down5 from '../../assets/shopImage/goods_1/down_5.png';

import goods2Top1 from '../../assets/shopImage/goods_2/top_1.png';
import goods2Top2 from '../../assets/shopImage/goods_2/top_2.png';
import goods2Top3 from '../../assets/shopImage/goods_2/top_3.png';
import goods2Top4 from '../../assets/shopImage/goods_2/top_4.png';
import goods2Down1 from '../../assets/shopImage/goods_2/down_1.png';
import goods2Down2 from '../../assets/shopImage/goods_2/down_2.png';
import goods2Down3 from '../../assets/shopImage/goods_2/down_3.png';
import goods2Down4 from '../../assets/shopImage/goods_2/down_4.png';
import goods2Down5 from '../../assets/shopImage/goods_2/down_5.png';

import goods3Top1 from '../../assets/shopImage/goods_3/top_1.png';
import goods3Top2 from '../../assets/shopImage/goods_3/top_2.png';
import goods3Top3 from '../../assets/shopImage/goods_3/top_3.png';
import goods3Top4 from '../../assets/shopImage/goods_3/top_4.png';
import goods3Down1 from '../../assets/shopImage/goods_3/down_1.png';
import goods3Down2 from '../../assets/shopImage/goods_3/down_2.png';
import goods3Down3 from '../../assets/shopImage/goods_3/down_3.png';
import goods3Down4 from '../../assets/shopImage/goods_3/down_4.png';
import goods3Down5 from '../../assets/shopImage/goods_3/down_5.png';

import goods4Top1 from '../../assets/shopImage/goods_4/top_1.png';
import goods4Top2 from '../../assets/shopImage/goods_4/top_2.png';
import goods4Top3 from '../../assets/shopImage/goods_4/top_3.png';
import goods4Top4 from '../../assets/shopImage/goods_4/top_4.png';
import goods4Down1 from '../../assets/shopImage/goods_4/down_1.png';
import goods4Down2 from '../../assets/shopImage/goods_4/down_2.png';
import goods4Down3 from '../../assets/shopImage/goods_4/down_3.png';
import goods4Down4 from '../../assets/shopImage/goods_4/down_4.png';
import goods4Down5 from '../../assets/shopImage/goods_4/down_5.png';

import goods5Top1 from '../../assets/shopImage/goods_5/top_1.png';
import goods5Top2 from '../../assets/shopImage/goods_5/top_2.png';
import goods5Top3 from '../../assets/shopImage/goods_5/top_3.png';
import goods5Top4 from '../../assets/shopImage/goods_5/top_4.png';
import goods5Down1 from '../../assets/shopImage/goods_5/down_1.png';
import goods5Down2 from '../../assets/shopImage/goods_5/down_2.png';
import goods5Down3 from '../../assets/shopImage/goods_5/down_3.png';
import goods5Down4 from '../../assets/shopImage/goods_5/down_4.png';
import goods5Down5 from '../../assets/shopImage/goods_5/down_5.png';

import goods6Top1 from '../../assets/shopImage/goods_6/top_1.png';
import goods6Top2 from '../../assets/shopImage/goods_6/top_2.png';
import goods6Top3 from '../../assets/shopImage/goods_6/top_3.png';
import goods6Top4 from '../../assets/shopImage/goods_6/top_4.png';
import goods6Down1 from '../../assets/shopImage/goods_6/down_1.png';
import goods6Down2 from '../../assets/shopImage/goods_6/down_2.png';
import goods6Down3 from '../../assets/shopImage/goods_6/down_3.png';
import goods6Down4 from '../../assets/shopImage/goods_6/down_4.png';
import goods6Down5 from '../../assets/shopImage/goods_6/down_5.png';

import goods7Top1 from '../../assets/shopImage/goods_7/top_1.png';
import goods7Top2 from '../../assets/shopImage/goods_7/top_2.png';
import goods7Top3 from '../../assets/shopImage/goods_7/top_3.png';
import goods7Top4 from '../../assets/shopImage/goods_7/top_4.png';
import goods7Down1 from '../../assets/shopImage/goods_7/down_1.png';
import goods7Down2 from '../../assets/shopImage/goods_7/down_2.png';
import goods7Down3 from '../../assets/shopImage/goods_7/down_3.png';
import goods7Down4 from '../../assets/shopImage/goods_7/down_4.png';
import goods7Down5 from '../../assets/shopImage/goods_7/down_5.png';

import goods8Top1 from '../../assets/shopImage/goods_8/top_1.png';
import goods8Top2 from '../../assets/shopImage/goods_8/top_2.png';
import goods8Top3 from '../../assets/shopImage/goods_8/top_3.png';
import goods8Top4 from '../../assets/shopImage/goods_8/top_4.png';
import goods8Down1 from '../../assets/shopImage/goods_8/down_1.png';
import goods8Down2 from '../../assets/shopImage/goods_8/down_2.png';
import goods8Down3 from '../../assets/shopImage/goods_8/down_3.png';
import goods8Down4 from '../../assets/shopImage/goods_8/down_4.png';
import goods8Down5 from '../../assets/shopImage/goods_8/down_5.png';

Mock.mock('/api/shoplist', 'get', {
  code: 0,
  msg: '',
  data: [
    {
      goodsId: 'goods_1',
      name: '招财转运纯黄铜葫芦钥匙扣',
      value: 15,
      img: goods1Top1,
      'total|1-20': 0, // 库存
      'goodsNumber|10000-15000': 0, // 商品数字编号
      'saleNumber|0-10': 0, // 已兑换数量
      goodsTitleImgList: [goods1Top1, goods1Top2, goods1Top3, goods1Top4], // 商品轮播图展示的图片信息数组
      goodsInfoImg: [goods1Down1, goods1Down2, goods1Down3, goods1Down4, goods1Down5],
    },
    {
      goodsId: 'goods_2',
      name: '渐变色马甲定制印',
      value: 80,
      img: goods2Top1,
      'total|1-20': 0, // 库存
      'goodsNumber|10000-15000': 0, // 商品数字编号
      'saleNumber|0-10': 0, // 已兑换数量
      goodsTitleImgList: [goods2Top1, goods2Top2, goods2Top3, goods2Top4], // 商品轮播图展示的图片信息数组
      goodsInfoImg: [goods2Down1, goods2Down2, goods2Down3, goods2Down4, goods2Down5],
    },
    {
      goodsId: 'goods_3',
      name: '广博(GuangBo)12#订书机',
      value: 20,
      img: goods3Top1,
      'total|1-20': 0, // 库存
      'goodsNumber|10000-15000': 0, // 商品数字编号
      'saleNumber|0-10': 0, // 已兑换数量
      goodsTitleImgList: [goods3Top1, goods3Top2, goods3Top3, goods3Top4], // 商品轮播图展示的图片信息数组
      goodsInfoImg: [goods3Down1, goods3Down2, goods3Down3, goods3Down4, goods3Down5],
    },
    {
      goodsId: 'goods_4',
      name: '美的（Midea）料理机家用 多',
      value: 150,
      img: goods4Top1,
      'total|1-20': 0, // 库存
      'goodsNumber|10000-15000': 0, // 商品数字编号
      'saleNumber|0-10': 0, // 已兑换数量
      goodsTitleImgList: [goods4Top1, goods4Top2, goods4Top3, goods4Top4], // 商品轮播图展示的图片信息数组
      goodsInfoImg: [goods4Down1, goods4Down2, goods4Down3, goods4Down4, goods4Down5],
    },
    {
      goodsId: 'goods_5',
      name: '绿盾 抗菌口罩防尘防雾霾骑行棉',
      value: 10,
      img: goods5Top1,
      'total|1-20': 0, // 库存
      'goodsNumber|10000-15000': 0, // 商品数字编号
      'saleNumber|0-10': 0, // 已兑换数量
      goodsTitleImgList: [goods5Top1, goods5Top2, goods5Top3, goods5Top4], // 商品轮播图展示的图片信息数组
      goodsInfoImg: [goods5Down1, goods5Down2, goods5Down3, goods5Down4, goods5Down5],
    },
    {
      goodsId: 'goods_6',
      name: '红双喜DHS乒乓球拍 横拍双面反',
      value: 10,
      img: goods6Top1,
      'total|1-20': 0, // 库存
      'goodsNumber|10000-15000': 0, // 商品数字编号
      'saleNumber|0-10': 0, // 已兑换数量
      goodsTitleImgList: [goods6Top1, goods6Top2, goods6Top3, goods6Top4], // 商品轮播图展示的图片信息数组
      goodsInfoImg: [goods6Down1, goods6Down2, goods6Down3, goods6Down4, goods6Down5],
    },
    {
      goodsId: 'goods_7',
      name: '奥克斯（AUX）FS-4',
      value: 215,
      img: goods7Top1,
      'total|1-20': 0, // 库存
      'goodsNumber|10000-15000': 0, // 商品数字编号
      'saleNumber|0-10': 0, // 已兑换数量
      goodsTitleImgList: [goods7Top1, goods7Top2, goods7Top3, goods7Top4], // 商品轮播图展示的图片信息数组
      goodsInfoImg: [goods7Down1, goods7Down2, goods7Down3, goods7Down4, goods7Down5],
    },
    {
      goodsId: 'goods_8',
      name: '汇乐玩具（HUILE TOYS）点头不倒娃 不倒翁',
      value: 40,
      img: goods8Top1,
      'total|1-20': 0, // 库存
      'goodsNumber|10000-15000': 0, // 商品数字编号
      'saleNumber|0-10': 0, // 已兑换数量
      goodsTitleImgList: [goods8Top1, goods8Top2, goods8Top3, goods8Top4], // 商品轮播图展示的图片信息数组
      goodsInfoImg: [goods8Down1, goods8Down2, goods8Down3, goods8Down4, goods8Down5],
    },
  ],
});
