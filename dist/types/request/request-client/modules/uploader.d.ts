import type { RequestClient } from '../request-client.js';
import type { RequestClientConfig } from '../types.js';
declare class FileUploader {
    private client;
    constructor(client: RequestClient);
    upload<T = any>(url: string, data: Record<string, any> & {
        file: Blob | File;
    }, config?: RequestClientConfig): Promise<T>;
}
export { FileUploader };
