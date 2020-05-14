
/**
 * 图层基础类
 * @class 
 */
class Base {

	layers = []

    /**
     * 事件监听,用法同jQuery.on
     */
	on(type, listener) {
		if (this._listeners === undefined) this._listeners = {};
		var listeners = this._listeners;
		if (listeners[type] === undefined) {
			listeners[type] = [];
		}
		if (listeners[type].indexOf(listener) === - 1) {
			listeners[type].push(listener);
		}
	}

    /**
     * 触发事件 
     * @example 
     * this.fire("change",event)
     */
	fire(type, event) {
		if (this._listeners === undefined) return;
		var listeners = this._listeners;
		var listenerArray = listeners[type];
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
		if (this._listeners === undefined) return;
		var listeners = this._listeners;
		var listenerArray = listeners[type];
		if (listenerArray !== undefined) {
			if (listener) {
				var index = listenerArray.indexOf(listener);
				if (index !== - 1) {
					listenerArray.splice(index, 1);
				}
			} else {
				this._listeners[type] = [];
			}
		}
	}

	initConfig(config) {

	}

    /**
     * 地图添加图层时调用,由子类实现
     * @param {Map} map - PigeonGL.Map实例
     */
	onAdd(map) {
		this.pigeonMap = map;
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
		if (this._listeners) {
			this._listeners = []
		}
	}

	/**
	 * 添加图层
	 * @param {Layer} layer - 图层
	 */
	addLayer(layer) {
		layer.id = ++this._layerid;
		this.layers.push(layer);
		layer.onAdd(this); //初始化layer
	}

	/**
	 * 删除图层
	 * @param {Layer} layer - 图层
	 */
	removeLayer(layer) {
		for (let x in this.layers) {
			if (this.layers[x].id == layer.id) {
				this.layers[x].onRemove();
				this.layers.splice(x, 1);
				return;
			}
		}
	}

	/**
	 * 获取图层通过id
	 */
	getLayerById(id) {
		for (let i = 0; i < this.layers.length; i++) {
			if (this.layer.id === id) return layer;
		}
	}

}
export default Base;