declare function useAccess(): {
    accessMode: import("vue").ComputedRef<import("../typings/index.js").AccessModeType>;
    hasAccessByCodes: (codes: string[]) => boolean;
    hasAccessByRoles: (roles: string[]) => boolean;
    toggleAccessMode: () => Promise<void>;
};
export { useAccess };
