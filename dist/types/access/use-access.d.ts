declare function useAccess(): {
    accessMode: any;
    hasAccessByCodes: (codes: string[]) => boolean;
    hasAccessByRoles: (roles: string[]) => boolean;
    toggleAccessMode: () => Promise<void>;
};
export { useAccess };
