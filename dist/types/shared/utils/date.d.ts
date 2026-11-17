import dayjs from 'dayjs';
type FormatDate = Date | dayjs.Dayjs | number | string;
type Format = 'HH' | 'HH:mm' | 'HH:mm:ss' | 'YYYY' | 'YYYY-MM' | 'YYYY-MM-DD' | 'YYYY-MM-DD HH' | 'YYYY-MM-DD HH:mm' | 'YYYY-MM-DD HH:mm:ss' | (string & {});
export declare function formatDate(time?: FormatDate, format?: Format): string;
export declare function formatDateTime(time?: FormatDate): string;
export declare function isDate(value: any): value is Date;
export declare function isDayjsObject(value: any): value is dayjs.Dayjs;
/**
 * 获取当前时区
 * @returns 当前时区
 */
export declare const getSystemTimezone: () => string;
/**
 * 设置默认时区
 * @param timezone
 */
export declare const setCurrentTimezone: (timezone?: string) => void;
/**
 * 获取设置的时区
 * @returns 设置的时区
 */
export declare const getCurrentTimezone: () => string;
export {};
