import type { VbenRouteMeta } from './vue-router.js';
declare module 'vue-router' {
    interface RouteMeta extends VbenRouteMeta {
    }
}
export type * from './app.js';
export type * from './basic.js';
export type * from './helper.js';
export type * from './languages.js';
export type * from './menu-record.js';
export type * from './tabs.js';
export type * from './vue-router.js';
