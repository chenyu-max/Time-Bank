import Cookies from 'js-cookie';

/**
 * 设置用户的 Cookie 信息
 * @param {Object} info
 * @returns {boolean}
 */
export function setCookie(info) {
  // 将对象中的键值对转化程数组 例如
  // {key1:value1,key2,value2} => [[key1,value1],[key2,value2]]
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}

/**
 * 获取 cookies 的user信息
 * @returns {{role: string, appkey: string, email: string, username: string}}
 */
export function getUserCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'), // 用户通行证唯一编号
    role: Cookies.get('role'), // 用户角色 普通用户 审核人
    email: Cookies.get('email'),
    phoneNumber: Cookies.get('phoneNumber'),
    avatarUrl: Cookies.get('avatarUrl'), // 用户头像地址
    userIDNumber: Cookies.get('userIDNumber'), // 用户身份证号
    userRealName: Cookies.get('userRealName'), // 用户真实姓名
    userBirthday: Cookies.get('userBirthday'), // 用户出生年月日
    userMoney: Cookies.get('userMoney'), // 时间货币余额
    userWorkTime: Cookies.get('userWorkTime'), // 用户志愿时长
  };
}

/**
 * 删除cookies中的信息
 * @returns {boolean}
 */
export function removeUserCookie() {
  Cookies.remove('appkey');
  Cookies.remove('username');
  Cookies.remove('role');
  Cookies.remove('email');
  Cookies.remove('phoneNumber');
  Cookies.remove('avatarUrl');
  Cookies.remove('userIDNumber');
  Cookies.remove('userRealName');
  Cookies.remove('userBirthday');
  Cookies.remove('userMoney');
  Cookies.remove('userWorkTime');
  return true;
}
