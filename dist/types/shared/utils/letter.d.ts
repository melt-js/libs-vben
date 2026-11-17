/**
 * 将字符串的首字母大写
 * @param string
 */
declare function capitalizeFirstLetter(string: string): string;
/**
 * 将字符串的首字母转换为小写。
 *
 * @param str 要转换的字符串
 * @returns 首字母小写的字符串
 */
declare function toLowerCaseFirstLetter(str: string): string;
/**
 *  生成驼峰命名法的键名
 * @param key
 * @param parentKey
 */
declare function toCamelCase(key: string, parentKey: string): string;
declare function kebabToCamelCase(str: string): string;
export { capitalizeFirstLetter, kebabToCamelCase, toCamelCase, toLowerCaseFirstLetter, };
