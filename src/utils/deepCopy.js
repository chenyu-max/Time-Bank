// 实现纯数据的深度克隆  如果对象或者数组中有函数，则无法克隆

export default function (obj) {
  return JSON.parse(JSON.stringify(obj));
}
