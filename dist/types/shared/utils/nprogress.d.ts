/**
 * 开始显示进度条。
 * 此函数首先加载NProgress库，然后调用NProgress的start方法开始显示进度条。
 */
declare function startProgress(): Promise<void>;
/**
 * 停止显示进度条，并隐藏进度条。
 * 此函数首先加载NProgress库，然后调用NProgress的done方法停止并隐藏进度条。
 */
declare function stopProgress(): Promise<void>;
export { startProgress, stopProgress };
