/**
 * 仅在不支持 dvh 时，把 --vben-viewport-height 写成像素值。
 * 支持 dvh 时保持 CSS 的 100vh → 100dvh 级联，避免 useCssVar 把单位冻成 px。
 */
export declare function useLayoutViewportHeight(): void;
