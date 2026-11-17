import type { Preferences } from './types.js';
/**
 * 更新主题的 CSS 变量以及其他 CSS 变量
 * @param preferences - 当前偏好设置对象，它的主题值将被用来设置文档的主题。
 */
declare function updateCSSVariables(preferences: Preferences): void;
declare function isDarkTheme(theme: string): boolean;
export { isDarkTheme, updateCSSVariables };
