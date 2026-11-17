/**
 * 移除并销毁loading
 * 放在这里是而不是放在 index.html 的app标签内，是因为这样比较不会生硬，渲染过快可能会有闪烁
 * 通过先添加css动画隐藏，在动画结束后在移除loading节点来改善体验
 * 不好的地方是会增加一些代码量
 * 自定义loading可以见：https://doc.vben.pro/guide/in-depth/loading.html
 */
export declare function unmountGlobalLoading(): void;
