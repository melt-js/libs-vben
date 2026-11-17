import type { Ref } from 'vue';
export declare function usePagination<T = any>(list: Ref<T[]>, pageSize: number, totalChangeToFirstPage?: boolean): {
    setCurrentPage: (page: number) => void;
    total: import("vue").ComputedRef<number>;
    setPageSize: (pageSize: number) => void;
    paginationList: import("vue").ComputedRef<T[]>;
    currentPage: Ref<number, number>;
};
