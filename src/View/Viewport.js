import {mat3} from 'gl-matrix';

/**
 * @class
 */
class ViewPort {
	constructor(config) {
		this.miniGL = config.miniGL;
		this.gl = this.miniGL.gl;
		this.config = Object.assign({

		}, config.config);
		this.transform = mat3.create();
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
		// 计算好坐标转换矩阵
		this.transform = mat3.create();
		mat3.scale(this.transform,this.transform,[2 / this.width,-2 / this.height]);
		// 这个矩阵工具真鸡儿难用，最讨厌内部偷偷帮我做转换的，我只想要个纯工具库！
		// gl-matrix会以初次进行换算的坐标系为基准空间，来进行换算，一般人思考都会以转换后的坐标系为基准，这里就得转换思维
		mat3.translate(this.transform,this.transform,[-this.width/2,-this.height/2]);
		this.invertTransform = mat3.create();
		mat3.invert(this.invertTransform,this.transform)
	}
}
export default ViewPort;