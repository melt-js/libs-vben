interface OpenWindowOptions {
    noopener?: boolean;
    noreferrer?: boolean;
    target?: '_blank' | '_parent' | '_self' | '_top' | (string & {});
}
/**
 * 新窗口打开URL。
 *
 * @param url - 需要打开的网址。
 * @param options - 打开窗口的选项。
 */
declare function openWindow(url: string, options?: OpenWindowOptions): void;
/**
 * 在新窗口中打开路由。
 * @param path
 */
declare function openRouteInNewWindow(path: string): void;
export { openRouteInNewWindow, openWindow };
