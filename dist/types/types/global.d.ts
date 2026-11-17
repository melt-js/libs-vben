// vue-router 的 RouteMeta 增强唯一来源是 @vben-core/typings/src/index.ts，
// 此处不再重复声明；侧效果导入保证仅经由 `@vben/types/global` 子路径消费
// 本包的程序（不经过 src/index.ts barrel）同样激活该增强。
import '@melt-js/libs-vben/typings';

export interface VbenAdminProAppConfigRaw {
  VITE_GLOB_API_URL: string;
  VITE_GLOB_REPORT_API_URL?: string;
  VITE_GLOB_WEBSOCKET_URL?: string;
  VITE_GLOB_AUTH_DINGDING_CLIENT_ID: string;
  VITE_GLOB_AUTH_DINGDING_CORP_ID: string;
}

interface AuthConfig {
  dingding?: {
    clientId: string;
    corpId: string;
  };
}

export interface ApplicationConfig {
  apiURL: string;
  auth: AuthConfig;
  /** JNPF dashboard and preview components consume these optional adapters. */
  reportApiURL: string;
  webSocketURL: string;
  isDevMode: () => boolean;
  isProdMode: () => boolean;
}

export type Fn<T = any, R = T> = (...args: T[]) => R;
export type TargetContext = '_blank' | '_self';

declare global {
  type Nullable<T> = null | T;
  type Recordable<T = any> = Record<string, T>;
  type Fn<T = any, R = T> = (...args: T[]) => R;
  type PropType<T> = import('vue').PropType<T>;
  namespace JSX {
    type Element = import('vue/jsx-runtime').JSX.Element;
    interface IntrinsicElements { [element: string]: any }
  }

  interface Window {
    _VBEN_ADMIN_PRO_APP_CONF_: VbenAdminProAppConfigRaw;
  }
}
