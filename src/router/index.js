import { createRouter, createWebHashHistory } from 'vue-router';
/**
 * 实现路由懒加载的工具函数
 * @param {string} viewPath  view的相对路径，相对于src目录
 */
export function lazyLoad(viewPath) {
  const modules = import.meta.glob('../views/**/*.vue');
  return modules[`../views/${viewPath}/index.vue`];
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('home'),
  },
  {
    path: '/counter',
    name: 'counter',
    component: lazyLoad('counter'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
