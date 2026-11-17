import type { DeepPartial } from '@melt-js/libs-vben/typings';
import type { CustomPreferencesRecord, InitialOptions, Preferences, PreferencesExtension } from './types.js';
declare class PreferenceManager {
    private cache;
    private customPreferencesExtension;
    private customState;
    private debouncedSave;
    private initialCustomPreferences;
    private initialPreferences;
    private isInitialized;
    private state;
    constructor();
    /**
     * 清除所有缓存的偏好设置
     */
    clearCache: () => Promise<void>;
    /**
     * 获取扩展偏好设置
     */
    getCustomPreferences: <TCustomPreferences extends object = CustomPreferencesRecord>() => Readonly<TCustomPreferences>;
    /**
     * 获取初始化扩展偏好设置
     */
    getInitialCustomPreferences: <TCustomPreferences extends object = CustomPreferencesRecord>() => Readonly<TCustomPreferences>;
    /**
     * 获取初始化偏好设置
     */
    getInitialPreferences: () => Preferences;
    /**
     * 获取当前偏好设置（只读）
     */
    getPreferences: () => {
        readonly app: {
            readonly accessMode: import("@melt-js/libs-vben/typings").AccessModeType;
            readonly authPageLayout: import("@melt-js/libs-vben/typings").AuthPageLayoutType;
            readonly checkUpdatesInterval: number;
            readonly colorGrayMode: boolean;
            readonly colorWeakMode: boolean;
            readonly compact: boolean;
            readonly contentCompact: import("@melt-js/libs-vben/typings").ContentCompactType;
            readonly contentCompactWidth: number;
            readonly contentPadding: number;
            readonly contentPaddingBottom: number;
            readonly contentPaddingLeft: number;
            readonly contentPaddingRight: number;
            readonly contentPaddingTop: number;
            readonly defaultAvatar: string;
            readonly defaultHomePath: string;
            readonly dynamicTitle: boolean;
            readonly enableCheckUpdates: boolean;
            readonly enableCopyPreferences: boolean;
            readonly enablePreferences: boolean;
            readonly enableRefreshToken: boolean;
            readonly enableStickyPreferencesNavigationBar: boolean;
            readonly isMobile: boolean;
            readonly layout: import("@melt-js/libs-vben/typings").LayoutType;
            readonly locale: import("@melt-js/libs-vben/typings").SupportedLanguagesType;
            readonly loginExpiredMode: import("@melt-js/libs-vben/typings").LoginExpiredModeType;
            readonly name: string;
            readonly preferencesButtonPosition: import("@melt-js/libs-vben/typings").PreferencesButtonPositionType;
            readonly timezone: string;
            readonly watermark: boolean;
            readonly watermarkContent: string;
            readonly zIndex: number;
        };
        readonly breadcrumb: {
            readonly enable: boolean;
            readonly hideOnlyOne: boolean;
            readonly showHome: boolean;
            readonly showIcon: boolean;
            readonly styleType: import("@melt-js/libs-vben/typings").BreadcrumbStyleType;
        };
        readonly copyright: {
            readonly companyName: string;
            readonly companySiteLink: string;
            readonly date: string;
            readonly enable: boolean;
            readonly icp: string;
            readonly icpLink: string;
            readonly settingShow?: boolean | undefined;
        };
        readonly footer: {
            readonly enable: boolean;
            readonly fixed: boolean;
            readonly height: number;
        };
        readonly header: {
            readonly enable: boolean;
            readonly height: number;
            readonly hidden: boolean;
            readonly menuAlign: import("@melt-js/libs-vben/typings").LayoutHeaderMenuAlignType;
            readonly mode: import("@melt-js/libs-vben/typings").LayoutHeaderModeType;
        };
        readonly logo: {
            readonly enable: boolean;
            readonly fit: "contain" | "cover" | "fill" | "none" | "scale-down";
            readonly fullLogoHeight?: number | string | undefined;
            readonly logoMode: "full" | "icon";
            readonly showText: boolean;
            readonly source: string;
            readonly sourceDark?: string | undefined;
        };
        readonly navigation: {
            readonly accordion: boolean;
            readonly split: boolean;
            readonly styleType: import("@melt-js/libs-vben/typings").NavigationStyleType;
        };
        readonly shortcutKeys: {
            readonly enable: boolean;
            readonly globalEscape: boolean;
            readonly globalLockScreen: boolean;
            readonly globalLogout: boolean;
            readonly globalPreferences: boolean;
            readonly globalSearch: boolean;
        };
        readonly sidebar: {
            readonly autoActivateChild: boolean;
            readonly collapsed: boolean;
            readonly collapsedButton: boolean;
            readonly collapsedShowTitle: boolean;
            readonly collapseWidth: number;
            readonly draggable: boolean;
            readonly enable: boolean;
            readonly expandOnHover: boolean;
            readonly extraCollapse: boolean;
            readonly extraCollapsedWidth: number;
            readonly fixedButton: boolean;
            readonly hidden: boolean;
            readonly mixedWidth: number;
            readonly width: number;
        };
        readonly tabbar: {
            readonly draggable: boolean;
            readonly enable: boolean;
            readonly height: number;
            readonly keepAlive: boolean;
            readonly maxCount: number;
            readonly middleClickToClose: boolean;
            readonly persist: boolean;
            readonly showIcon: boolean;
            readonly showMaximize: boolean;
            readonly showMore: boolean;
            readonly showRefresh: boolean;
            readonly styleType: import("@melt-js/libs-vben/typings").TabsStyleType;
            readonly visitHistory: boolean;
            readonly wheelable: boolean;
        };
        readonly theme: {
            readonly builtinType: import("@melt-js/libs-vben/typings").BuiltinThemeType;
            readonly colorDestructive: string;
            readonly colorPrimary: string;
            readonly colorSuccess: string;
            readonly colorWarning: string;
            readonly fontSize: number;
            readonly mode: import("@melt-js/libs-vben/typings").ThemeModeType;
            readonly radius: string;
            readonly semiDarkHeader: boolean;
            readonly semiDarkSidebar: boolean;
            readonly semiDarkSidebarSub: boolean;
        };
        readonly transition: {
            readonly enable: boolean;
            readonly loading: boolean;
            readonly name: import("@melt-js/libs-vben/typings").PageTransitionType | (string & {});
            readonly progress: boolean;
        };
        readonly widget: {
            readonly fullscreen: boolean;
            readonly fullscreenButtonPosition: "header" | "none" | "user-dropdown";
            readonly globalSearch: boolean;
            readonly globalSearchButtonPosition: "header" | "none" | "user-dropdown";
            readonly languageToggle: boolean;
            readonly languageToggleButtonPosition: "header" | "none" | "user-dropdown";
            readonly lockScreen: boolean;
            readonly lockScreenButtonPosition: "header" | "none" | "user-dropdown";
            readonly logoutButtonPosition: "header" | "none" | "user-dropdown";
            readonly notification: boolean;
            readonly notificationButtonPosition: "header" | "none" | "user-dropdown";
            readonly order: readonly string[];
            readonly refresh: boolean;
            readonly refreshButtonPosition: "header" | "none" | "user-dropdown";
            readonly sidebarToggle: boolean;
            readonly themeToggle: boolean;
            readonly themeToggleButtonPosition: "header" | "none" | "user-dropdown";
            readonly timezone: boolean;
            readonly timezoneButtonPosition: "header" | "none" | "user-dropdown";
        };
    };
    /**
     * 获取扩展偏好设置配置
     */
    getPreferencesExtension: <TCustomPreferences extends object = CustomPreferencesRecord>() => Readonly<PreferencesExtension<TCustomPreferences>> | null;
    /**
     * 初始化偏好设置
     * @param options - 初始化配置项
     * @param options.namespace - 命名空间，用于隔离不同应用的配置
     * @param options.overrides - 要覆盖的偏好设置
     */
    initPreferences: <TCustomPreferences extends object = CustomPreferencesRecord>({ namespace, overrides, extension, }: InitialOptions<TCustomPreferences>) => Promise<void>;
    /**
     * 重置偏好设置到初始状态
     */
    resetPreferences: () => Promise<void>;
    /**
     * 更新扩展偏好设置
     * @param updates - 要更新的扩展偏好设置
     */
    updateCustomPreferences: <TCustomPreferences extends object = CustomPreferencesRecord>(updates: DeepPartial<TCustomPreferences>) => void;
    /**
     * 更新偏好设置
     * @param updates - 要更新的偏好设置
     */
    updatePreferences: (updates: DeepPartial<Preferences>) => void;
    private cloneValue;
    /**
     * 处理更新
     * @param updates - 更新的偏好设置
     */
    private handleUpdates;
    /**
     * 初始化平台标识
     */
    private initPlatform;
    private isAlmostInteger;
    private isValidCustomPreferenceValue;
    /**
     * 从缓存加载扩展偏好设置
     * @returns 缓存的扩展偏好设置，如果不存在则返回 null
     */
    private loadCustomFromCache;
    /**
     * 从缓存加载偏好设置
     * @returns 缓存的偏好设置，如果不存在则返回 null
     */
    private loadFromCache;
    private replaceCustomPreferences;
    private resolveCustomPreferencesDefaults;
    private resolveNumericConstraint;
    /**
     * 清理缓存中膨胀的数组字段（保留首次出现的元素）
     * 用于修复早期版本 defu 合并数组时 concat 追加导致的脏数据
     */
    private sanitizeCachedArray;
    private sanitizeCustomPreferences;
    /**
     * 保存偏好设置到缓存
     */
    private saveToCache;
    /**
     * 监听状态和系统偏好设置的变化
     */
    private setupWatcher;
    /**
     * 更新页面颜色模式（灰色、色弱）
     * @param preference - 偏好设置
     */
    private updateColorMode;
}
declare const preferencesManager: PreferenceManager;
export { PreferenceManager, preferencesManager };
