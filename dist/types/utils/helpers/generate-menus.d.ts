import type { Router, RouteRecordRaw } from 'vue-router';
import type { MenuRecordRaw } from '../../typings/index.js';
/**
 * 根据 routes 生成菜单列表
 * @param routes - 路由配置列表
 * @param router - Vue Router 实例
 * @returns 生成的菜单列表
 */
declare function generateMenus(routes: RouteRecordRaw[], router: Router): MenuRecordRaw[];
export { generateMenus };
