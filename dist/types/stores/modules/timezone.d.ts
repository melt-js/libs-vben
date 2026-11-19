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
    timezone: any;
    setTimezone: (timezone: string) => Promise<void>;
    getTimezoneOptions: () => Promise<{
        label: string;
        value: string;
    }[]>;
    $reset: () => void;
}, any>, Pick<{
    timezone: any;
    setTimezone: (timezone: string) => Promise<void>;
    getTimezoneOptions: () => Promise<{
        label: string;
        value: string;
    }[]>;
    $reset: () => void;
}, any>, Pick<{
    timezone: any;
    setTimezone: (timezone: string) => Promise<void>;
    getTimezoneOptions: () => Promise<{
        label: string;
        value: string;
    }[]>;
    $reset: () => void;
}, any>>;
export { setTimezoneHandler, useTimezoneStore };
