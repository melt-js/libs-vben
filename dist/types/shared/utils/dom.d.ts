export interface VisibleDomRect {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
}
/**
 * 获取元素可见信息
 * @param element
 */
export declare function getElementVisibleRect(element?: HTMLElement | null): VisibleDomRect;
export declare function getScrollbarWidth(): number;
export declare function getLayoutScrollElement(): HTMLElement | null;
export declare function needsScrollbar(target?: HTMLElement | null): boolean;
export declare function triggerWindowResize(): void;
