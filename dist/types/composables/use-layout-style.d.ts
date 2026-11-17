import type { CSSProperties } from 'vue';
/**
 * @zh_CN content style
 */
export declare function useLayoutContentStyle(): {
    contentElement: import("vue").Ref<HTMLDivElement | null, HTMLDivElement | null>;
    overlayStyle: import("vue").ComputedRef<CSSProperties>;
};
export declare function useLayoutHeaderStyle(): {
    getLayoutHeaderHeight: () => number;
    setLayoutHeaderHeight: (height: number) => void;
};
export declare function useLayoutFooterStyle(): {
    getLayoutFooterHeight: () => number;
    setLayoutFooterHeight: (height: number) => void;
};
