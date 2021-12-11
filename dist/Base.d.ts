export default Base;
/**
 * 图层基础类
 * @class
 */
declare class Base {
    layers: any[];
    _listeners: {};
    /**
     * 事件监听,用法同jQuery.on
     */
    on(type: any, listener: any): void;
    /**
     * 触发事件
     * @example
     * this.fire("change",event)
     */
    fire(type: any, event: any): void;
    /**
     * 关闭事件
     * @example
     * this.off('change',onChange)
     */
    off(type: any, listener: any): void;
    initConfig(config: any): void;
    /**
     * 地图添加图层时调用,由子类实现
     * @param {any} map
     */
    onAdd(map: any): void;
    miniGL: any;
    /**
     * 地图每帧调用该函数
     */
    update(): void;
    /**
     * 移除图层时调用
     */
    onRemove(): void;
    /**
     * 添加图层
     * @param {Layer} layer - 图层
     */
    addLayer(layer: Layer): void;
    /**
     * 删除图层
     * @param {Layer} layer - 图层
     */
    removeLayer(layer: Layer): void;
    /**
     * 获取图层通过id
     */
    getLayerById(id: any): any;
}
