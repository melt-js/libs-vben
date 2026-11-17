import type { ComputedRef } from 'vue';
import type { RouteLocationNormalized } from 'vue-router';
type TabIdentity = RouteLocationNormalized & {
    key?: string;
};
export declare function useTabs(): {
    closeAllTabs: () => Promise<void>;
    closeCurrentTab: (tab?: RouteLocationNormalized) => Promise<void>;
    closeLeftTabs: (tab?: RouteLocationNormalized) => Promise<void>;
    closeOtherTabs: (tab?: RouteLocationNormalized) => Promise<void>;
    closeRightTabs: (tab?: RouteLocationNormalized) => Promise<void>;
    closeTabByKey: (key: string) => Promise<void>;
    getTabDisableState: (tab?: TabIdentity) => {
        disabledCloseAll: boolean;
        disabledCloseCurrent: boolean;
        disabledCloseLeft: boolean;
        disabledCloseOther: boolean;
        disabledCloseRight: boolean;
        disabledRefresh: boolean;
    };
    openTabInNewWindow: (tab?: RouteLocationNormalized) => Promise<void>;
    pinTab: (tab?: RouteLocationNormalized) => Promise<void>;
    refreshTab: (name?: string) => Promise<void>;
    resetTabTitle: () => Promise<void>;
    setTabTitle: (title: ComputedRef<string> | string) => Promise<void>;
    toggleTabPin: (tab?: RouteLocationNormalized) => Promise<void>;
    unpinTab: (tab?: RouteLocationNormalized) => Promise<void>;
};
export {};
