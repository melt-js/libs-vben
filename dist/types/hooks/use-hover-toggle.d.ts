import type { Arrayable, MaybeElementRef } from '@vueuse/core';
import type { Ref } from 'vue';
interface HoverDelayOptions {
    /** 鼠标进入延迟时间 */
    enterDelay?: (() => number) | number;
    /** 鼠标离开延迟时间 */
    leaveDelay?: (() => number) | number;
}
/**
 * 监测鼠标是否在元素内部，如果在元素内部则返回 true，否则返回 false
 * @param refElement 所有需要检测的元素。支持单个元素、元素数组或响应式引用的元素数组。如果鼠标在任何一个元素内部都会返回 true
 * @param delay 延迟更新状态的时间，可以是数字或包含进入/离开延迟的配置对象
 * @returns 返回一个数组，第一个元素是一个 ref，表示鼠标是否在元素内部，第二个元素是一个控制器，可以通过 enable 和 disable 方法来控制监听器的启用和禁用
 */
export declare function useHoverToggle(refElement: Arrayable<MaybeElementRef> | Ref<HTMLElement[] | null>, delay?: (() => number) | HoverDelayOptions | number): [any, {
    enable(): void;
    disable(): void;
}];
export {};
