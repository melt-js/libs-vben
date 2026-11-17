import type { RouteRecordRaw } from 'vue-router';
/**
 * 动态生成路由 - 前端方式
 */
declare function generateRoutesByFrontend(routes: RouteRecordRaw[], roles: string[], forbiddenComponent?: RouteRecordRaw['component']): Promise<RouteRecordRaw[]>;
/**
 * 判断路由是否有权限访问
 * @param route
 * @param access
 */
declare function hasAuthority(route: RouteRecordRaw, access: string[]): boolean;
export { generateRoutesByFrontend, hasAuthority };
