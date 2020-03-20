import lineShader from '../Shaders/line';
import Base from './Base';

class Point extends Base {
	drawType = "LINES";
	shaders = {
		vertex: lineShader.vertexShader,
		fragment: lineShader.fragmentShader
	}

	constructor(config) {
		super(config);
		this.initShader();
		this.init();
	}

	init() {
		// this.setData([0, 0, 0.5, 0, 0.5, 0, 0.5, 0.5]);
	}

	addData(data) {
		const newVertex = [...this.vertex, ...data];
		this.setData(newVertex)
	}

	render() {
		// 2D 只需要两个坐标轴标识位置
		const vLen = Math.floor(this.vertex.length / this.vSize); //几个点
		const offset = 0;// 从数据第几位开始偏移
		const normalLize = false;

		// 分别绑定数据到shader程序中
		for (let key in this.buffers) {
			const bufferData = this.buffers[key];
			const bufferPosition = this.getAttribLocation(key);
			// 分别绑定数据到shader程序中
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
			this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalLize, 0, offset);
			this.gl.enableVertexAttribArray(bufferPosition);
		}

		// 加载shader程序
		this.gl.useProgram(this.shaderPorgram);

		// 渲染
		if (this.vertex.length) {
			this.gl.drawArrays(this.gl[this.drawType], 0, vLen);
		}
	}
}
export default Point;