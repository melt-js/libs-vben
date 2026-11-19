import type { BasicUserInfo } from '../../typings/index.js';
interface AccessState {
    /**
     * 用户信息
     */
    userInfo: BasicUserInfo | null;
    /**
     * 用户角色
     */
    userRoles: string[];
}
/**
 * @zh_CN 用户信息相关
 */
export declare const useUserStore: import("pinia").StoreDefinition<"core-user", AccessState, {
    /** JNPF's user selectors expect the upstream Vben getter name. */
    getUserInfo: (state: any) => any;
}, {
    setUserInfo(userInfo: BasicUserInfo | null): void;
    setUserRoles(roles: string[]): void;
}>;
export {};
