import type { RouteRecordRaw } from 'vue-router';
import type { GenerateMenuAndRoutesOptions } from '@melt-js/libs-vben/typings';
/**
 * 动态生成路由 - 后端方式
 * 对 meta.menuVisibleWithForbidden 为 true 的项直接替换为 403 组件，让用户知悉功能并申请权限。
 */
declare function generateRoutesByBackend(options: GenerateMenuAndRoutesOptions): Promise<RouteRecordRaw[]>;
export { generateRoutesByBackend };
