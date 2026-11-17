import type { SupportedLanguagesType } from '@melt-js/libs-vben/typings';
export type Locale = SupportedLanguagesType;
export declare const messages: Partial<Record<Locale, Record<string, string>>>;
export declare const getMessages: (locale: Locale) => Record<string, string>;
