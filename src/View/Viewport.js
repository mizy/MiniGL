/**
 * @class
 */
class ViewPort {
	constructor(config) {
		this.miniGL = config.miniGL;
		this.gl = this.miniGL.gl;
		this.config = Object.assign({

		}, config.config);
	}

	/**
	 * @param  {} x=0
	 * @param  {} y=0
	 */
	convertScreenToClip(x = 0, y = 0) {
		return {
			x: x * 2 / this.width - 1,
			y: 1 - y * 2 / this.height
		}
	}

	/**
	 * @param  {} x=0
	 * @param  {} y=0
	 */
	convertClipToScreen(x = 0, y = 0) {
		return {
			x: (x + 1) * this.width / 2,
			y: (1 - y) * this.height / 2
		}
	}

	/**
	 * 重新布局
	 */
	resize() {
		const width = this.config.width || this.miniGL.container.clientWidth;
		const height = this.config.height || this.miniGL.container.clientHeight
		this.miniGL.canvas.width = width;
		this.miniGL.canvas.height = height;
		this.gl.viewport(0, 0, width, height);
		this.width = width;
		this.height = height;
		this.ratio = this.width/this.height;
	}
}
export default ViewPort;