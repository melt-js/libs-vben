import type { Ref } from 'vue';
/**
 * 依次从插槽、attrs、props、state 中获取值
 * @param key
 * @param props
 * @param state
 */
export declare function usePriorityValue<T extends Record<string, any>, S extends Record<string, any>, K extends keyof T = keyof T>(key: K, props: T, state: Readonly<Ref<NoInfer<S>>> | undefined): any;
/**
 * 批量获取state中的值（每个值都是ref）
 * @param props
 * @param state
 */
export declare function usePriorityValues<T extends Record<string, any>, S extends Ref<Record<string, any>> = Readonly<Ref<NoInfer<T>, NoInfer<T>>>>(props: T, state: S | undefined): { [K in keyof T]: ComputedRef<T[K]>; };
/**
 * 批量获取state中的值（集中在一个computed，用于透传）
 * @param props
 * @param state
 */
export declare function useForwardPriorityValues<T extends Record<string, any>, S extends Ref<Record<string, any>> = Readonly<Ref<NoInfer<T>, NoInfer<T>>>>(props: T, state: S | undefined): any;
