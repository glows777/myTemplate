/**
 * @description 防抖，如果需要延迟执行，必须把wait也传进去(要么不传，要么全部传)
 * @param { function } func
 * @param { number } wait 延迟执行毫秒数 默认500毫秒
 * @param { boolean } immediate 是否立即执行，true为立即执行，false为延迟执行 默认延迟执行
 * @returns { function }
 */
export function debounce(func, wait = 500, immediate = false) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer); // 只是清除这个定时器，而不会改动timeout
    }
    if (immediate) {
      let callNow = !timer; // 第一次会立即执行，然后等wait毫秒后才执行
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timer = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * @description 节流
 * @param { function } func
 * @param { number } wait 延迟执行毫秒数,默认1000毫秒
 * @returns { function }
 */
export function throttle(func, wait = 1000) {
  let timer = null;
  let startTime = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let curTime = Date.now();
    let remaining = wait - (curTime - startTime); // 剩余时间
    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = curTime;
    } else {
        // 重新设置定时器，时长为remaining
        timer = setTimeout(func, remaining);
    }
  };
}
