/**
 * @zh_CN 栈数据结构
 */
export declare class Stack<T> {
    /**
     * @zh_CN 栈内元素数量
     */
    get size(): number;
    /**
     * @zh_CN 是否去重
     */
    private readonly dedup;
    /**
     * @zh_CN 栈内元素
     */
    private items;
    /**
     * @zh_CN 栈的最大容量
     */
    private readonly maxSize?;
    constructor(dedup?: boolean, maxSize?: number);
    /**
     * @zh_CN 清空栈内元素
     */
    clear(): void;
    /**
     * @zh_CN 查看栈顶元素
     * @returns 栈顶元素
     */
    peek(): T | undefined;
    /**
     * @zh_CN 出栈
     * @returns 栈顶元素
     */
    pop(): T | undefined;
    /**
     * @zh_CN 入栈
     * @param items 要入栈的元素
     */
    push(...items: T[]): void;
    /**
     * @zh_CN 移除栈内元素
     * @param itemList 要移除的元素列表
     */
    remove(...itemList: T[]): void;
    /**
     * @zh_CN 保留栈内元素
     * @param itemList 要保留的元素列表
     */
    retain(itemList: T[]): void;
    /**
     * @zh_CN 转换为数组
     * @returns 栈内元素数组
     */
    toArray(): T[];
}
/**
 * @zh_CN 创建一个栈实例
 * @param dedup 是否去重
 * @param maxSize 栈的最大容量
 * @returns 栈实例
 */
export declare const createStack: <T>(dedup?: boolean, maxSize?: number) => Stack<T>;
