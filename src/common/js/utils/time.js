/**
 * @description 时间戳转化为年 月 日 时 分 秒
 * @param { number } 时间戳
 * @param { format } 返回格式，支持自定义，但参数必须与formateArr里保持一致
 * @returns { string }
 */
function timestampTransfer(number, format) {
  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(number * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (let i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

//数据转化
function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

/**
 * @description 格式化时间，转化为几年前，几个月前，几星期前，几小时前，几分钟前，几秒钟前
 * @param { timestamp } 时间戳，单位是秒
 */
function timestampFormat(timestamp) {
  var mistiming = Math.round((Date.now() / 1000 - timestamp ));
  var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
  var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
  for (var i = 0; i < arrn.length; i++) {
    var inm = Math.floor(mistiming / arrn[i]);
    if (inm != 0) {
      return inm + arrr[i] + '前';
    }
  }
}



export default { timestampTransfer, timestampFormat };
