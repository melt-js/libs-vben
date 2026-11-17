import type { RequestClient } from './request-client.js';
import type { MakeErrorMessageFn, ResponseInterceptorConfig } from './types.js';
export declare const defaultResponseInterceptor: ({ codeField, dataField, successCode, }: {
    /** 响应数据中代表访问结果的字段名 */
    codeField?: string;
    /** 响应数据中装载实际数据的字段名，或者提供一个函数从响应数据中解析需要返回的数据 */
    dataField?: ((response: any) => any) | string;
    /** 当codeField所指定的字段值与successCode相同时，代表接口访问成功。如果提供一个函数，则返回true代表接口访问成功 */
    successCode?: ((code: any) => boolean) | number | string;
}) => ResponseInterceptorConfig;
export declare const authenticateResponseInterceptor: ({ client, doReAuthenticate, doRefreshToken, enableRefreshToken, formatToken, }: {
    client: RequestClient;
    doReAuthenticate: () => Promise<void>;
    doRefreshToken: () => Promise<string>;
    enableRefreshToken: boolean;
    formatToken: (token: string) => null | string;
}) => ResponseInterceptorConfig;
export declare const errorMessageResponseInterceptor: (makeErrorMessage?: MakeErrorMessageFn) => ResponseInterceptorConfig;
