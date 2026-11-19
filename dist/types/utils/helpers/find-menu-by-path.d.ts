import type { MenuRecordRaw } from '../../typings/index.js';
declare function findMenuByPath(list: MenuRecordRaw[], path?: string): MenuRecordRaw | null;
/**
 * 查找根菜单
 * @param menus
 * @param path
 */
declare function findRootMenuByPath(menus: MenuRecordRaw[], path?: string, level?: number): {
    findMenu: MenuRecordRaw | null;
    rootMenu: MenuRecordRaw | undefined;
    rootMenuPath: string | undefined;
};
export { findMenuByPath, findRootMenuByPath };
