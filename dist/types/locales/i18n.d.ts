import type { App } from 'vue';
import type { Locale } from 'vue-i18n';
import type { ImportLocaleFn, LocaleSetupOptions, SupportedLanguagesType } from './typing.js';
declare const i18n: import("vue-i18n").I18n<{}, {}, {}, string, false>;
/**
 * Load locale modules
 * @param modules
 */
declare function loadLocalesMap(modules: Record<string, () => Promise<unknown>>): Record<string, ImportLocaleFn>;
/**
 * Load locale modules with directory structure
 * @param regexp - Regular expression to match language and file names
 * @param modules - The modules object containing paths and import functions
 * @returns A map of locales to their corresponding import functions
 */
declare function loadLocalesMapFromDir(regexp: RegExp, modules: Record<string, () => Promise<unknown>>): Record<Locale, ImportLocaleFn>;
declare function setupI18n(app: App, options?: LocaleSetupOptions): Promise<void>;
/**
 * Load locale messages
 * @param lang
 */
declare function loadLocaleMessages(lang: SupportedLanguagesType): Promise<void>;
export { i18n, loadLocaleMessages, loadLocalesMap, loadLocalesMapFromDir, setupI18n, };
