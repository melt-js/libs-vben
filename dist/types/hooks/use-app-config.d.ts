import type { ApplicationConfig } from '../types/global.js';
/**
 * 由 vite-inject-app-config 注入的全局配置
 */
export declare function useAppConfig(env: Record<string, any>, isProduction: boolean): ApplicationConfig;
