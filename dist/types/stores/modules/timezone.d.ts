interface TimezoneHandler {
    getTimezone?: () => Promise<null | string | undefined>;
    getTimezoneOptions?: () => Promise<{
        label: string;
        value: string;
    }[]>;
    setTimezone?: (timezone: string) => Promise<void>;
}
declare const setTimezoneHandler: (handler: Partial<TimezoneHandler>) => void;
/**
 * timezone支持模块
 */
declare const useTimezoneStore: import("pinia").StoreDefinition<"core-timezone", Pick<{
    timezone: import("vue").Ref<string, string>;
    setTimezone: (timezone: string) => Promise<void>;
    getTimezoneOptions: () => Promise<{
        label: string;
        value: string;
    }[]>;
    $reset: () => void;
}, "timezone">, Pick<{
    timezone: import("vue").Ref<string, string>;
    setTimezone: (timezone: string) => Promise<void>;
    getTimezoneOptions: () => Promise<{
        label: string;
        value: string;
    }[]>;
    $reset: () => void;
}, never>, Pick<{
    timezone: import("vue").Ref<string, string>;
    setTimezone: (timezone: string) => Promise<void>;
    getTimezoneOptions: () => Promise<{
        label: string;
        value: string;
    }[]>;
    $reset: () => void;
}, "$reset" | "setTimezone" | "getTimezoneOptions">>;
export { setTimezoneHandler, useTimezoneStore };
