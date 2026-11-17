import type { StorageManagerOptions } from './types.js';
/**
 * 存储管理器（策略模式）
 * - prefix（命名空间隔离）在此层处理
 * - TTL（过期机制）在此层处理
 * - Driver 只负责纯粹的 KV 存取
 */
declare class StorageManager {
    private driver;
    private prefix;
    constructor({ driver, prefix }?: StorageManagerOptions);
    /**
     * 清除所有带前缀的存储项
     */
    clear(): Promise<void>;
    /**
     * 清除所有过期的存储项
     */
    clearExpiredItems(): Promise<void>;
    /**
     * 获取存储项
     * @param key 键
     * @param defaultValue 当项不存在或已过期时返回的默认值
     * @returns 值，如果项已过期则返回默认值
     */
    getItem<T>(key: string, defaultValue?: null | T): Promise<null | T>;
    /**
     * 获取当前前缀下的所有存储键（已去除前缀部分）
     */
    keys(): Promise<string[]>;
    /**
     * 移除存储项
     * @param key 键
     */
    removeItem(key: string): Promise<void>;
    /**
     * 设置存储项
     * @param key 键
     * @param value 值
     * @param ttl 存活时间（毫秒）
     */
    setItem(key: string, value: unknown, ttl?: number): Promise<void>;
    /**
     * 根据运行环境创建默认驱动：
     * - 浏览器环境（window.localStorage 可用）→ LocalStorageDriver
     * - SSR / Node 环境 → MemoryStorageDriver
     */
    private createDefaultDriver;
    /**
     * 获取完整的存储键（带前缀）
     * @param key 原始键
     * @returns 带前缀的完整键
     */
    private getFullKey;
}
export { StorageManager };
