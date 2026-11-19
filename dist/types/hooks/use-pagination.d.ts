import type { Ref } from 'vue';
export declare function usePagination<T = any>(list: Ref<T[]>, pageSize: number, totalChangeToFirstPage?: boolean): {
    setCurrentPage: (page: number) => void;
    total: any;
    setPageSize: (pageSize: number) => void;
    paginationList: any;
    currentPage: any;
};
