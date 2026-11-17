export declare function bindMethods<T extends object>(instance: T): void;
/**
 * 获取嵌套对象的字段值
 * @param obj - 要查找的对象
 * @param path - 用于查找字段的路径，使用小数点分隔
 * @returns 字段值，或者未找到时返回 undefined
 */
export declare function getNestedValue<T>(obj: T, path: string): any;
