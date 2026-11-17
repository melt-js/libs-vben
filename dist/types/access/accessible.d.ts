import type { AccessModeType, GenerateMenuAndRoutesOptions, RouteRecordRaw } from '@melt-js/libs-vben/types';
declare function generateAccessible(mode: AccessModeType, options: GenerateMenuAndRoutesOptions): Promise<{
    accessibleMenus: import("@melt-js/libs-vben/types").MenuRecordRaw[];
    accessibleRoutes: RouteRecordRaw[];
}>;
export { generateAccessible };
