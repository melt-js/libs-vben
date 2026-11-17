interface Props {
    /**
     * Specified codes is visible
     * @default []
     */
    codes?: string[];
    /**
     * 通过什么方式来控制组件，如果是 role，则传入角色，如果是 code，则传入权限码
     * @default 'role'
     */
    type?: 'code' | 'role';
}
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    codes: string[];
    type: "code" | "role";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
