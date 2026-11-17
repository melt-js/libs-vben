interface DictItem {
    [key: string]: any;
    /** Tag 颜色，CellDict 使用 */
    color?: string;
    label: string;
    value: number | string;
}
interface DictHandler {
    getAllDicts?: () => Promise<Record<string, DictItem[]>>;
    getDict?: (code: string) => Promise<DictItem[]>;
    getVersion?: () => Promise<number | string | undefined>;
}
/**
 * 注入自定义字典处理器
 * Inject a custom dictionary handler
 */
declare const setDictHandler: (handler: Partial<DictHandler>) => void;
/**
 * 字典支持模块
 * Dictionary support module
 */
declare const useDictStore: import("pinia").StoreDefinition<"core-dict", Pick<{
    dictMap: import("vue").Ref<Record<string, DictItem[]>, Record<string, DictItem[]>>;
    version: import("vue").Ref<string | number | undefined, string | number | undefined>;
    getDict: (code: string) => Promise<DictItem[]>;
    getDictSync: (code: string) => DictItem[];
    getDictItem: (code: string, value: null | number | string | undefined) => DictItem | undefined;
    getDictLabel: (code: string, value: null | number | string | undefined) => null | number | string | undefined;
    loadAllDicts: (force?: boolean) => Promise<void>;
    refreshDict: (code?: string) => void;
    $reset: () => void;
}, "dictMap" | "version">, Pick<{
    dictMap: import("vue").Ref<Record<string, DictItem[]>, Record<string, DictItem[]>>;
    version: import("vue").Ref<string | number | undefined, string | number | undefined>;
    getDict: (code: string) => Promise<DictItem[]>;
    getDictSync: (code: string) => DictItem[];
    getDictItem: (code: string, value: null | number | string | undefined) => DictItem | undefined;
    getDictLabel: (code: string, value: null | number | string | undefined) => null | number | string | undefined;
    loadAllDicts: (force?: boolean) => Promise<void>;
    refreshDict: (code?: string) => void;
    $reset: () => void;
}, never>, Pick<{
    dictMap: import("vue").Ref<Record<string, DictItem[]>, Record<string, DictItem[]>>;
    version: import("vue").Ref<string | number | undefined, string | number | undefined>;
    getDict: (code: string) => Promise<DictItem[]>;
    getDictSync: (code: string) => DictItem[];
    getDictItem: (code: string, value: null | number | string | undefined) => DictItem | undefined;
    getDictLabel: (code: string, value: null | number | string | undefined) => null | number | string | undefined;
    loadAllDicts: (force?: boolean) => Promise<void>;
    refreshDict: (code?: string) => void;
    $reset: () => void;
}, "getDict" | "getDictSync" | "getDictItem" | "getDictLabel" | "loadAllDicts" | "refreshDict" | "$reset">>;
export type { DictHandler, DictItem };
export { setDictHandler, useDictStore };
