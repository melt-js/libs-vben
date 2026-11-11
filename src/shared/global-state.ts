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

class GlobalShareState {
  #api: Record<string, any> = {};
  #components: ComponentsState = {};
  #message: MessageState = {};
  #stores: Record<string, any> = {};

  /**
   * 定义框架内部各个场景的消息提示
   */
  public defineMessage(message: MessageState) {
    this.#message = { ...this.#message, ...message };
  }

  public getComponents(): ComponentsState {
    return this.#components;
  }

  /** JNPF components resolve application APIs through this shared adapter. */
  public getApi(): Record<string, any> {
    return this.#api;
  }

  public getStores(): Record<string, any> {
    return this.#stores;
  }

  public getMessage(): MessageState {
    return this.#message;
  }

  public setComponents(value: ComponentsState) {
    this.#components = value;
  }

  public setApi(value: Record<string, any>) {
    this.#api = value;
  }

  public setStores(value: Record<string, any>) {
    this.#stores = value;
  }
}

export const globalShareState = new GlobalShareState();
