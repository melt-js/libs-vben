import type { AccessModeType, GenerateMenuAndRoutesOptions, RouteRecordRaw } from '../types/index.js';
declare function generateAccessible(mode: AccessModeType, options: GenerateMenuAndRoutesOptions): Promise<{
    accessibleMenus: import("../types/index.js").MenuRecordRaw[];
    accessibleRoutes: RouteRecordRaw[];
}>;
export { generateAccessible };
