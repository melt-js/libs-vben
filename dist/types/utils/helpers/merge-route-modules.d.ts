import type { RouteRecordRaw } from 'vue-router';
interface RouteModuleType {
    default: RouteRecordRaw[];
}
/**
 * 合并动态路由模块的默认导出
 * @param routeModules 动态导入的路由模块对象
 * @returns 合并后的路由配置数组
 */
declare function mergeRouteModules(routeModules: Record<string, unknown>): RouteRecordRaw[];
export { mergeRouteModules };
export type { RouteModuleType };
