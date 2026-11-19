import type { SupportedLanguagesType } from '../../typings/index.js';
export type Locale = SupportedLanguagesType;
export declare const messages: Partial<Record<Locale, Record<string, string>>>;
export declare const getMessages: (locale: Locale) => Record<string, string>;
