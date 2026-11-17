import type { RequestClient } from '../request-client.js';
import type { SseRequestOptions } from '../types.js';
/**
 * SSE模块
 */
declare class SSE {
    private client;
    constructor(client: RequestClient);
    postSSE(url: string, data?: any, requestOptions?: SseRequestOptions): Promise<void>;
    /**
     * SSE请求方法
     * @param url - 请求URL
     * @param data - 请求数据
     * @param requestOptions - SSE请求选项
     */
    requestSSE(url: string, data?: any, requestOptions?: SseRequestOptions): Promise<void>;
}
export { SSE };
