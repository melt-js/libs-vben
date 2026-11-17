/**
 * 全局复用的变量、组件、配置，各个模块之间共享
 * 通过单例模式实现,单例必须注意不受请求影响，例如用户信息这些需要根据请求获取的。后续如果有ssr需求，也不会影响
 */
interface ComponentsState {
    [key: string]: any;
}
interface MessageState {
    copyPreferencesSuccess?: (title: string, content?: string) => void;
    createMessage?: (title: string, content?: string) => void;
}
export interface IGlobalSharedState {
    api: Record<string, any>;
    components: ComponentsState;
    message: MessageState;
    stores: Record<string, any>;
}
declare class GlobalShareState {
    #private;
    /**
     * 定义框架内部各个场景的消息提示
     */
    defineMessage(message: MessageState): void;
    getComponents(): ComponentsState;
    /** JNPF components resolve application APIs through this shared adapter. */
    getApi(): Record<string, any>;
    getStores(): Record<string, any>;
    getMessage(): MessageState;
    setComponents(value: ComponentsState): void;
    setApi(value: Record<string, any>): void;
    setStores(value: Record<string, any>): void;
}
export declare const globalShareState: GlobalShareState;
export {};
