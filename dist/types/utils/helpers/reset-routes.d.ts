import type { Router, RouteRecordRaw } from 'vue-router';
/**
 * @zh_CN 重置所有路由，如有指定白名单除外
 */
export declare function resetStaticRoutes(router: Router, routes: RouteRecordRaw[]): void;
