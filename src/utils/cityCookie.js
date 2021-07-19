import Cookies from 'js-cookie';

export function setCityCookie(info) {
  Cookies.set('nowCity', info);
  return true;
}

export function getCityCookie() {
  // 存储在 cookie 中的是 字符串 我们要将字符串转换成数组
  const str = Cookies.get('nowCity');
  return str.substring(1, str.length - 1)
    .replaceAll(' ', '')
    .split(',')
    .map((item) => item.substr(1, item.length - 2));
}

export function deleteCityCookie() {
  Cookies.remove('nowCity');
}
