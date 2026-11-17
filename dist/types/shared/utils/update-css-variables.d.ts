/**
 * 更新 CSS 变量的函数
 * @param variables 要更新的 CSS 变量与其新值的映射
 * @param id 内联样式表的 id，便于复用与覆盖
 * @param selector CSS 变量挂载的选择器，默认 `:root`。
 *  对于像 TDesign 这种将变量定义在 `:root[theme-mode='dark']` 等更高优先级选择器下的组件库，
 *  需要传入相同（或更高）优先级的选择器才能正确覆盖。
 */
declare function updateCSSVariables(variables: {
    [key: string]: string;
}, id?: string, selector?: string): void;
export { updateCSSVariables };
