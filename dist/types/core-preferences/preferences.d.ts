import type { DeepPartial } from '../typings/index.js';
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
    getPreferences: () => any;
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
