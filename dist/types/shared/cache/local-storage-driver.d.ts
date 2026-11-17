import type { IStorageDriver } from './types.js';
type StorageType = 'localStorage' | 'sessionStorage';
interface LocalStorageDriverOptions {
    /** 使用 localStorage 还是 sessionStorage */
    storageType?: StorageType;
}
/**
 * LocalStorage / SessionStorage 驱动
 * 用 async 包装同步 API，保持接口统一
 */
declare class LocalStorageDriver implements IStorageDriver {
    private storage;
    constructor({ storageType, }?: LocalStorageDriverOptions);
    clear(): Promise<void>;
    getItem<T>(key: string): Promise<null | T>;
    keys(): Promise<string[]>;
    removeItem(key: string): Promise<void>;
    setItem(key: string, value: unknown): Promise<void>;
}
export { LocalStorageDriver };
export type { LocalStorageDriverOptions };
