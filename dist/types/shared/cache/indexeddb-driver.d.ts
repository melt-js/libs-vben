import type { IStorageDriver } from './types.js';
interface IndexedDBDriverOptions {
    /** 数据库名称 */
    dbName?: string;
    /** 数据库版本 */
    dbVersion?: number;
    /** 对象存储名称 */
    storeName?: string;
}
/**
 * IndexedDB 驱动
 * 采用懒初始化模式，首次操作时自动打开数据库
 */
declare class IndexedDBDriver implements IStorageDriver {
    private dbName;
    private dbPromise;
    private dbVersion;
    private storeName;
    constructor({ dbName, dbVersion, storeName, }?: IndexedDBDriverOptions);
    clear(): Promise<void>;
    getItem<T>(key: string): Promise<null | T>;
    keys(): Promise<string[]>;
    removeItem(key: string): Promise<void>;
    setItem(key: string, value: unknown): Promise<void>;
    /**
     * 懒初始化：首次调用时打开数据库，后续复用同一个 Promise
     */
    private getDB;
    private openDB;
}
export { IndexedDBDriver };
export type { IndexedDBDriverOptions };
