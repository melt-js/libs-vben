import type { WatermarkOptions } from 'watermark-js-plus';
export declare function useWatermark(): {
    destroyWatermark: () => void;
    updateWatermark: (options: Partial<WatermarkOptions>) => Promise<void>;
    watermark: Readonly<import("vue").Ref<{
        readonly changeOptions: (args?: Partial<WatermarkOptions>, mode?: import("watermark-js-plus").ChangeOptionsMode, redraw?: boolean) => Promise<void>;
        readonly create: () => Promise<void>;
        readonly destroy: () => void;
        readonly check: () => Promise<boolean>;
    } | undefined, {
        readonly changeOptions: (args?: Partial<WatermarkOptions>, mode?: import("watermark-js-plus").ChangeOptionsMode, redraw?: boolean) => Promise<void>;
        readonly create: () => Promise<void>;
        readonly destroy: () => void;
        readonly check: () => Promise<boolean>;
    } | undefined>>;
};
