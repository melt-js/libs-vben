import type { AxiosInstance } from 'axios';
import type { RequestClientConfig, RequestClientOptions } from './types.js';
import { FileDownloader } from './modules/downloader.js';
import { InterceptorManager } from './modules/interceptor.js';
import { SSE } from './modules/sse.js';
import { FileUploader } from './modules/uploader.js';
declare class RequestClient {
    addRequestInterceptor: InterceptorManager['addRequestInterceptor'];
    addResponseInterceptor: InterceptorManager['addResponseInterceptor'];
    download: FileDownloader['download'];
    readonly instance: AxiosInstance;
    isRefreshing: boolean;
    postSSE: SSE['postSSE'];
    refreshTokenQueue: ((token: null | string, error?: unknown) => void)[];
    requestSSE: SSE['requestSSE'];
    upload: FileUploader['upload'];
    /**
     * 构造函数，用于创建Axios实例
     * @param options - Axios请求配置，可选
     */
    constructor(options?: RequestClientOptions);
    /**
     * DELETE请求方法
     */
    delete<T = any>(url: string, config?: RequestClientConfig): Promise<T>;
    /**
     * GET请求方法
     */
    get<T = any>(url: string, config?: RequestClientConfig): Promise<T>;
    /**
     * 获取基础URL
     */
    getBaseUrl(): string | undefined;
    /**
     * POST请求方法
     */
    post<T = any>(url: string, data?: any, config?: RequestClientConfig): Promise<T>;
    /**
     * PUT请求方法
     */
    put<T = any>(url: string, data?: any, config?: RequestClientConfig): Promise<T>;
    /**
     * 通用的请求方法
     */
    request<T>(url: string, config: RequestClientConfig): Promise<T>;
}
export { RequestClient };
