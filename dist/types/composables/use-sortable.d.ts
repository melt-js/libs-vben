import type { SortableOptions } from 'sortablejs';
import type Sortable from 'sortablejs';
declare function useSortable<T extends HTMLElement>(sortableContainer: T, options?: SortableOptions): {
    initializeSortable: () => Promise<Sortable>;
};
export { useSortable };
export type { Sortable };
