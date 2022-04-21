/**
 * 图层基础类
 * @class
 */
class Base {
    constructor() {
        this._listeners = {};
    }
    /**
     * 事件监听,用法同jQuery.on
     */
    on(type, listener) {
        const listeners = this._listeners;
        if (listeners[type] === undefined) {
            listeners[type] = [];
        }
        if (listeners[type].indexOf(listener) === -1) {
            listeners[type].push(listener);
        }
    }
    /**
     * 触发事件
     * @example
     * this.fire("change",event)
     */
    fire(type, event) {
        const listeners = this._listeners;
        const listenerArray = listeners[type];
        if (listenerArray !== undefined) {
            var array = listenerArray.slice(0);
            for (var i = 0, l = array.length; i < l; i++) {
                array[i].call(this, event);
            }
        }
    }
    /**
     * 关闭事件
     * @example
     * this.off('change',onChange)
     */
    off(type, listener) {
        const listeners = this._listeners;
        const listenerArray = listeners[type];
        if (listenerArray !== undefined) {
            if (listener) {
                var index = listenerArray.indexOf(listener);
                if (index !== -1) {
                    listenerArray.splice(index, 1);
                }
            }
            else {
                this._listeners[type] = [];
            }
        }
    }
    initConfig(config) {
    }
    /**
     * 地图添加图层时调用,由子类实现
     */
    onAdd(map) {
        this.miniGL = map;
    }
    /**
     * 地图每帧调用该函数
     */
    update() {
    }
    /**
     * 移除图层时调用
     */
    onRemove() {
        this._listeners = {};
    }
}
export default Base;
