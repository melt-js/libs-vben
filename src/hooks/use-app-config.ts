import type {
  ApplicationConfig,
  VbenAdminProAppConfigRaw,
} from '@melt-js/libs-vben/types/global';

/**
 * 由 vite-inject-app-config 注入的全局配置
 */
export function useAppConfig(
  env: Record<string, any>,
  isProduction: boolean,
): ApplicationConfig {
  // 生产环境优先使用 window._VBEN_ADMIN_PRO_APP_CONF_（上游由
  // extra-app-config 插件注入）；本模板没有该插件时回退到构建期 env。
  const config = (
    isProduction
      ? (window._VBEN_ADMIN_PRO_APP_CONF_ ?? env)
      : env
  ) as VbenAdminProAppConfigRaw;

  const {
    VITE_GLOB_API_URL,
    VITE_GLOB_REPORT_API_URL,
    VITE_GLOB_WEBSOCKET_URL,
    VITE_GLOB_AUTH_DINGDING_CORP_ID,
    VITE_GLOB_AUTH_DINGDING_CLIENT_ID,
  } = config;

  const applicationConfig: ApplicationConfig = {
    apiURL: VITE_GLOB_API_URL,
    auth: {},
    reportApiURL: VITE_GLOB_REPORT_API_URL ?? `${VITE_GLOB_API_URL}/Report`,
    webSocketURL: VITE_GLOB_WEBSOCKET_URL ?? '',
    isDevMode: () => !isProduction,
    isProdMode: () => isProduction,
  };
  if (VITE_GLOB_AUTH_DINGDING_CORP_ID && VITE_GLOB_AUTH_DINGDING_CLIENT_ID) {
    applicationConfig.auth.dingding = {
      clientId: VITE_GLOB_AUTH_DINGDING_CLIENT_ID,
      corpId: VITE_GLOB_AUTH_DINGDING_CORP_ID,
    };
  }

  return applicationConfig;
}
