import type { WatermarkOptions } from 'watermark-js-plus';
export declare function useWatermark(): {
    destroyWatermark: () => void;
    updateWatermark: (options: Partial<WatermarkOptions>) => Promise<void>;
    watermark: any;
};
