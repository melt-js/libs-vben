import type { BuiltinThemeType, TimezoneOption } from '../typings/index.js';
interface BuiltinThemePreset {
    color: string;
    darkPrimaryColor?: string;
    primaryColor?: string;
    type: BuiltinThemeType;
}
declare const BUILT_IN_THEME_PRESETS: BuiltinThemePreset[];
/**
 * 时区选项
 */
declare const DEFAULT_TIME_ZONE_OPTIONS: TimezoneOption[];
export declare const COLOR_PRESETS: BuiltinThemePreset[];
export { BUILT_IN_THEME_PRESETS, DEFAULT_TIME_ZONE_OPTIONS };
export type { BuiltinThemePreset };
