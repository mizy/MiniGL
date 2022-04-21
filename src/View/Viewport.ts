import { mat3 } from 'gl-matrix';
import MiniGL, { MiniGLConfig } from '..';

/**
 * @class
 */
class ViewPort {
	miniGL: MiniGL
	gl: WebGL2RenderingContext
	config: MiniGLConfig
	transform: mat3
	convertTransform: mat3
	scale = 1
	translate = [0, 0]
	rotation = Math.PI * 2  
	width = 100
	height = 100
	pixelRatio = 1
	renderWidth = 200;
	renderHeight = 200
	ratio = 1
	matrix:mat3
	constructor(config:MiniGLConfig) {
		this.miniGL = config.miniGL;
		this.gl = this.miniGL.gl;
		this.config = Object.assign({

		}, config.config);
		this.transform = mat3.create();// 2d视图转换矩阵
		this.convertTransform = mat3.create();// 空间转换矩阵
	}

	convertScreenToWorld(x = 0, y = 0) {
		return {
			x: (x - this.translate[0]) / this.scale,
			y: (y - this.translate[1]) / this.scale,
		};
	}
	convertWorldToScreen(x = 0, y = 0) {
		return {
			x: this.scale * x + this.translate[0],
			y: this.scale * y + this.translate[1],
		};
	}

	/**
	 * @param  {} x=0
	 * @param  {} y=0
	 */
	convertScreenToClip(x = 0, y = 0) {
		return {
			x: x * 2 / this.width - 1,
			y: 1 - y * 2 / this.height
		};
	}

	/**
	 * @param  {} x=0
	 * @param  {} y=0
	 */
	convertClipToScreen(x = 0, y = 0) {
		return {
			x: (x + 1) * this.width / 2,
			y: (1 - y) * this.height / 2
		};
	}

	/**
	 * 重新布局
	 */
	resize() {
		const ratio = window.devicePixelRatio;
		this.pixelRatio = ratio;
		const width = (this.config.width || this.miniGL.container.clientWidth);
		const height = (this.config.height || this.miniGL.container.clientHeight);
		const renderWidth = width * ratio;
		const renderHeight = height * ratio;
		this.miniGL.canvasDOM.width = renderWidth;
		this.miniGL.canvasDOM.height = renderHeight;
		this.miniGL.canvasDOM.style.width = width + 'px';
		this.miniGL.canvasDOM.style.height = height + 'px';
		this.gl.viewport(0, 0, renderWidth, renderHeight);
		this.renderWidth = renderWidth;
		this.renderHeight = renderHeight;
		this.width = width;
		this.height = height;
		this.ratio = width / height;
		this.makeMatrix();
	}

	makeMatrix() {
		// 计算好坐标转换矩阵
		const transform = mat3.create();
		mat3.scale(transform, transform, [2 / this.width, -2 / this.height]);
		// gl-matrix会以初次进行换算的坐标系为基准空间，来进行换算
		// 也就是说每次进行转换的时候，都是在原矩阵上做计算和转换，而不只是改变矩阵的值
		mat3.translate(transform, transform, [-this.width / 2, -this.height / 2]);
		this.matrix = transform;
		mat3.copy(this.transform, transform);
	}
}
export default ViewPort;
