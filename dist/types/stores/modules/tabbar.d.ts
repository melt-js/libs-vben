import type { ComputedRef, VNode } from 'vue';
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteLocationNormalizedLoadedGeneric, Router, RouteRecordNormalized } from 'vue-router';
import type { TabDefinition } from '../../typings/index.js';
import { Stack } from '../../shared/utils/index.js';
interface RouteCached {
    component: VNode;
    key: string;
    route: RouteLocationNormalizedLoadedGeneric;
}
interface TabbarState {
    cachedRoutes: Map<string, RouteCached>;
    /**
     * @zh_CN 当前打开的标签页列表缓存
     */
    cachedTabs: Set<string>;
    /**
     * @zh_CN 拖拽结束的索引
     */
    dragEndIndex: number;
    /**
     * @zh_CN 需要排除缓存的标签页
     */
    excludeCachedTabs: Set<string>;
    /**
     * @zh_CN 标签右键菜单列表
     */
    menuList: string[];
    /**
     * @zh_CN 是否刷新
     */
    renderRouteView?: boolean;
    /**
     * @zh_CN 当前打开的标签页列表
     */
    tabs: TabDefinition[];
    /**
     * @zh_CN 更新时间，用于一些更新场景，使用watch深度监听的话，会损耗性能
     */
    updateTime?: number;
    /**
     * @zh_CN 上一个标签页打开的标签
     */
    visitHistory: Stack<string>;
}
/**
 * @zh_CN 访问权限相关
 */
export declare const useTabbarStore: import("pinia").StoreDefinition<"core-tabbar", TabbarState, {
    affixTabs(): TabDefinition[];
    getCachedTabs(): string[];
    getExcludeCachedTabs(): string[];
    getMenuList(): string[];
    getTabs(): TabDefinition[];
    getCachedRoutes(): Map<string, RouteCached>;
}, {
    /**
     * Close tabs in bulk
     */
    _bulkCloseByKeys(keys: string[]): Promise<void>;
    /**
     * @zh_CN 关闭标签页
     * @param tab
     */
    _close(tab: TabDefinition): void;
    /**
     * @zh_CN 跳转到默认标签页
     */
    _goToDefaultTab(router: Router): Promise<void>;
    /**
     * @zh_CN 跳转到标签页
     * @param tab
     * @param router
     */
    _goToTab(tab: TabDefinition, router: Router): Promise<void>;
    /**
     * @zh_CN 添加标签页
     * @param routeTab
     */
    addTab(routeTab: TabDefinition): TabDefinition;
    /**
     * @zh_CN 关闭所有标签页
     */
    closeAllTabs(router: Router): Promise<void>;
    /**
     * @zh_CN 关闭左侧标签页
     * @param tab
     */
    closeLeftTabs(tab: TabDefinition): Promise<void>;
    /**
     * @zh_CN 关闭其他标签页
     * @param tab
     */
    closeOtherTabs(tab: TabDefinition): Promise<void>;
    /**
     * @zh_CN 关闭右侧标签页
     * @param tab
     */
    closeRightTabs(tab: TabDefinition): Promise<void>;
    /**
     * @zh_CN 关闭标签页
     * @param tab
     * @param router
     */
    closeTab(tab: TabDefinition, router: Router): Promise<void>;
    /**
     * @zh_CN 通过key关闭标签页
     * @param key
     * @param router
     */
    closeTabByKey(key: string, router: Router): Promise<void>;
    /**
     * 根据tab的key获取tab
     * @param key
     */
    getTabByKey(key: string): TabDefinition;
    /**
     * @zh_CN 新窗口打开标签页
     * @param tab
     */
    openTabInNewWindow(tab: TabDefinition, router: Router): Promise<void>;
    /**
     * @zh_CN 固定标签页
     * @param tab
     */
    pinTab(tab: TabDefinition): Promise<void>;
    /**
     * 刷新标签页
     */
    refresh(router: Router | string): Promise<any>;
    /**
     * 根据路由名称刷新指定标签页
     */
    refreshByName(name: string): Promise<void>;
    /**
     * @zh_CN 重置标签页标题
     */
    resetTabTitle(tab: TabDefinition): Promise<void>;
    /**
     * 设置固定标签页
     * @param tabs
     */
    setAffixTabs(tabs: RouteRecordNormalized[]): void;
    /**
     * @zh_CN 更新菜单列表
     * @param list
     */
    setMenuList(list: string[]): void;
    /**
     * @zh_CN 设置标签页标题
     *
     * @zh_CN 支持设置静态标题字符串或计算属性作为动态标题
     * @zh_CN 当标题为计算属性时,标题会随计算属性值变化而自动更新
     * @zh_CN 适用于需要根据状态或多语言动态更新标题的场景
     *
     * @param {TabDefinition} tab - 标签页对象
     * @param {ComputedRef<string> | string} title - 标题内容,支持静态字符串或计算属性
     *
     * @example
     * // 设置静态标题
     * setTabTitle(tab, '新标签页');
     *
     * @example
     * // 设置动态标题
     * setTabTitle(tab, computed(() => t('common.dashboard')));
     */
    setTabTitle(tab: TabDefinition, title: ComputedRef<string> | string): Promise<void>;
    setUpdateTime(): void;
    /**
     * @zh_CN 设置标签页顺序
     * @param oldIndex
     * @param newIndex
     */
    sortTabs(oldIndex: number, newIndex: number): Promise<void>;
    /**
     * @zh_CN 切换固定标签页
     * @param tab
     */
    toggleTabPin(tab: TabDefinition): Promise<void>;
    /**
     * @zh_CN 取消固定标签页
     * @param tab
     */
    unpinTab(tab: TabDefinition): Promise<void>;
    /**
     * 根据当前打开的选项卡更新缓存
     */
    updateCacheTabs(): Promise<void>;
    /**
     * 添加缓存的route
     * @param component
     * @param route
     */
    addCachedRoute(component: VNode, route: RouteLocationNormalizedLoaded): void;
    removeCachedRoute(key: string): void;
}>;
/**
 * 从route获取tab页的key
 * @param tab
 */
declare function getTabKey(tab: RouteLocationNormalized | RouteRecordNormalized): string;
export { getTabKey };
