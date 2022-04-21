import MiniGL from ".";
/**
 * 图层基础类
 * @class
 */
declare class Base {
    miniGL: MiniGL;
    _listeners: {};
    /**
     * 事件监听,用法同jQuery.on
     */
    on(type: string, listener: Function): void;
    /**
     * 触发事件
     * @example
     * this.fire("change",event)
     */
    fire(type: string, event: any): void;
    /**
     * 关闭事件
     * @example
     * this.off('change',onChange)
     */
    off(type: string, listener: any): void;
    initConfig(config: any): void;
    /**
     * 地图添加图层时调用,由子类实现
     */
    onAdd(map: MiniGL): void;
    /**
     * 地图每帧调用该函数
     */
    update(): void;
    /**
     * 移除图层时调用
     */
    onRemove(): void;
}
export default Base;
