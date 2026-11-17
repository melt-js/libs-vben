import type { Pinia } from 'pinia';
import type { App } from 'vue';
export interface InitStoreOptions {
    /**
     * @zh_CN 应用名,由于 @vben/stores 是公用的，后续可能有多个app，为了防止多个app缓存冲突，可在这里配置应用名,应用名将被用于持久化的前缀
     */
    namespace: string;
}
/**
 * @zh_CN 初始化pinia
 */
export declare function initStores(app: App, options: InitStoreOptions): Promise<Pinia>;
export declare function resetAllStores(): void;
