import axios from 'axios';
// import {getTokenAUTH} from '@/common/js/utils/auth';
import cancel from './cancel';
import errorHandle from './error';
import loading from './loading';

function myAxios(axiosConfig, customOptions, loadingOptions) {
  const service = axios.create({
    baseURL: 'http://localhost:3000', // 设置统一的请求前缀
    timeout: 10000 // 设置统一的超时时长
  });

  // 自定义配置
  let custom_options = Object.assign(
    {
      repeat_request_cancel: true, // 是否开启取消重复请求, 默认为 true
      loading: false, // 是否开启loading层效果, 默认为false
      reduct_data_format: true, // 是否开启简洁的数据结构响应, 默认为true
      error_message_show: true, // 是否开启接口错误信息展示,默认为true
      code_message_show: false // 是否开启code不为0时的信息提示, 默认为false
    },
    customOptions
  );

  // 请求拦截
  service.interceptors.request.use(
    (config) => {
      cancel.removePending(config);
      custom_options.repeat_request_cancel && cancel.addPending(config);
      // 创建loading实例
      if (custom_options.loading) {
        loading.LoadingInstance._count++;
        if (loading.LoadingInstance._count === 1) {
          loading.LoadingInstance._target = ElLoading.service(loadingOptions);
        }
      }
      // 自动携带token
      //   if (getTokenAUTH() && typeof window !== "undefined") {
      //     config.headers.Authorization = getTokenAUTH();
      //   }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // 响应拦截
  service.interceptors.response.use(
    (response) => {
      cancel.removePending(response.config);
      custom_options.loading && loading.closeLoading(custom_options); // 关闭loading

      if (custom_options.code_message_show && response.data && response.data.code !== 0) {
        ElMessage({
          type: 'error',
          message: response.data.message
        });
        return Promise.reject(response.data); // code不等于0, 页面具体逻辑就不执行了
      }

      return custom_options.reduct_data_format ? response.data : response;
    },
    (error) => {
      error.config && cancel.removePending(error.config);
      custom_options.loading && loading.closeLoading(custom_options); // 关闭loading
      custom_options.error_message_show && errorHandle.httpErrorStatusHandle(error); // 处理错误状态码
      return Promise.reject(error); // 错误继续返回给到具体页面
    }
  );

  return service(axiosConfig);
}

export default myAxios;


