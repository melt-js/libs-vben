interface DownloadOptions<T = string> {
    fileName?: string;
    source: T;
    target?: string;
}
/**
 * 通过 URL 下载文件，支持跨域
 * @throws {Error} - 当下载失败时抛出错误
 */
export declare function downloadFileFromUrl({ fileName, source, target, }: DownloadOptions): Promise<void>;
/**
 * 通过 Base64 下载文件
 */
export declare function downloadFileFromBase64({ fileName, source }: DownloadOptions): void;
/**
 * 通过图片 URL 下载图片文件
 */
export declare function downloadFileFromImageUrl({ fileName, source, }: DownloadOptions): Promise<void>;
/**
 * 通过 Blob 下载文件
 */
export declare function downloadFileFromBlob({ fileName, source, }: DownloadOptions<Blob>): void;
/**
 * 下载文件，支持 Blob、字符串和其他 BlobPart 类型
 */
export declare function downloadFileFromBlobPart({ fileName, source, }: DownloadOptions<BlobPart>): void;
/**
 * img url to base64
 * @param url
 */
export declare function urlToBase64(url: string, mineType?: string): Promise<string>;
/**
 * 通用下载触发函数
 * @param href - 文件下载的 URL
 * @param fileName - 下载文件的名称，如果未提供则自动识别
 * @param revokeDelay - 清理 URL 的延迟时间 (毫秒)
 */
export declare function triggerDownload(href: string, fileName: string | undefined, revokeDelay?: number): void;
export {};
