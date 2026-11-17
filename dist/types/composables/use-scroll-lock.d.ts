export declare const SCROLL_FIXED_CLASS = "_scroll__fixed_";
interface ScrollLockOptions {
    immediate?: boolean;
}
export declare function useScrollLock(options?: ScrollLockOptions): import("vue").WritableComputedRef<boolean, boolean>;
export {};
