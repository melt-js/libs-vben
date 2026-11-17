import type { SupportedLanguagesType } from '@melt-js/libs-vben/typings';
/**
 * @zh_CN 登录页面 url 地址
 */
export declare const LOGIN_PATH = "/auth/login";
/**
 * 语言选项；value 默认为 string 以支持运行时注册自定义语言（见 setSupportLanguages）
 */
export interface LanguageOption<TValue extends string = string> {
    label: string;
    value: TValue;
}
/**
 * 支持的语言（默认值，可在运行时通过 setSupportLanguages 覆盖）。
 * value 约束到 SupportedLanguagesType，应用通过模块增强扩展语言后，
 * 默认列表同样接受新语言，拼写错误会在编译期报错
 */
export declare const SUPPORT_LANGUAGES: LanguageOption<SupportedLanguagesType>[];
type LanguageListListener = (languages: LanguageOption[]) => void;
/**
 * 获取当前动态语言列表
 */
export declare function getSupportLanguages(): LanguageOption[];
/**
 * 更新语言列表并通知所有监听器
 */
export declare function setSupportLanguages(languages: LanguageOption[]): void;
/**
 * 订阅语言列表变化，返回取消订阅函数
 */
export declare function onSupportLanguagesChange(listener: LanguageListListener): () => void;
export {};
