import type { RouteRecordRaw } from 'vue-router';
import type { MenuRecordRaw } from '../../typings/index.js';
type AccessToken = null | string;
interface AccessState {
    /**
     * 权限码
     */
    accessCodes: string[];
    /**
     * 可访问的菜单列表
     */
    accessMenus: MenuRecordRaw[];
    /**
     * 可访问的路由列表
     */
    accessRoutes: RouteRecordRaw[];
    /**
     * 登录 accessToken
     */
    accessToken: AccessToken;
    /**
     * 是否已经检查过权限
     */
    isAccessChecked: boolean;
    /**
     * 是否锁屏状态
     */
    isLockScreen: boolean;
    /** Optional field permissions consumed by JNPF's form/table components. */
    permissionList: Array<Record<string, any>>;
    /**
     * 锁屏密码
     */
    lockScreenPassword?: string;
    /**
     * 登录是否过期
     */
    loginExpired: boolean;
    /**
     * 登录 accessToken
     */
    refreshToken: AccessToken;
}
/**
 * @zh_CN 访问权限相关
 */
export declare const useAccessStore: import("pinia").StoreDefinition<"core-access", AccessState, {}, {
    getMenuByPath(path: string): MenuRecordRaw | undefined;
    lockScreen(password: string): void;
    setAccessCodes(codes: string[]): void;
    setAccessMenus(menus: MenuRecordRaw[]): void;
    setAccessRoutes(routes: RouteRecordRaw[]): void;
    setAccessToken(token: AccessToken): void;
    setIsAccessChecked(isAccessChecked: boolean): void;
    setLoginExpired(loginExpired: boolean): void;
    setRefreshToken(token: AccessToken): void;
    unlockScreen(): void;
}>;
export {};
