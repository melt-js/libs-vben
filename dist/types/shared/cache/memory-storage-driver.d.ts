import type { IStorageDriver } from './types.js';
/**
 * 内存存储驱动
 * 适用于测试环境和 SSR 场景，数据不持久化
 */
declare class MemoryStorageDriver implements IStorageDriver {
    private store;
    clear(): Promise<void>;
    getItem<T>(key: string): Promise<null | T>;
    keys(): Promise<string[]>;
    removeItem(key: string): Promise<void>;
    setItem(key: string, value: unknown): Promise<void>;
}
export { MemoryStorageDriver };
