import type { AxiosInstance } from 'axios';
import type { RequestInterceptorConfig, ResponseInterceptorConfig } from '../types.js';
declare class InterceptorManager {
    private axiosInstance;
    constructor(instance: AxiosInstance);
    addRequestInterceptor({ fulfilled, rejected, }?: RequestInterceptorConfig): void;
    addResponseInterceptor<T = any>({ fulfilled, rejected, }?: ResponseInterceptorConfig<T>): void;
}
export { InterceptorManager };
