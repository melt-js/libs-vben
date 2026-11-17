import type { ComposerTranslation, Composer } from 'vue-i18n';
import { i18n, loadLocaleMessages, loadLocalesMap, loadLocalesMapFromDir, setupI18n } from './i18n.js';
declare const $t: ComposerTranslation;
declare const $te: Composer['te'];
export { $t, $te, i18n, loadLocaleMessages, loadLocalesMap, loadLocalesMapFromDir, setupI18n, };
export { type ImportLocaleFn, type LocaleSetupOptions, type SupportedLanguagesType, } from './typing.js';
export type { CompileError } from '@intlify/core-base';
export { useI18n } from 'vue-i18n';
export type { Locale } from 'vue-i18n';
