
// 是否开启loading效果

const LoadingInstance = {
  _target: null,
  _count: 0
};

/**
 * 关闭Loading层实例
 * @param {*} _options
 */
function closeLoading(_options) {
  if (_options.loading && LoadingInstance._count > 0) LoadingInstance._count--;
  if (LoadingInstance._count === 0) {
    LoadingInstance._target.close();
    LoadingInstance._target = null;
  }
}

export default{ LoadingInstance, closeLoading };
