import pointShader from '../Shaders/simplePoint';
import Base from './Base';

class SimplePoint extends Base {
	drawType = "POINTS";
	shaders = {
		vertex: pointShader.vertexShader,
		fragment: pointShader.fragmentShader
	}
	vertex = [];
	vSize = 2;
	size = 5;
	color = [1, 0, 0, 1];
	constructor(config) {
		super(config);
		this.initShader();
		this.init();
	}

	init() {
		// this.setVertices([0.5, 0.5, 10, -0.5, 0.5, 5, -0.5, -0.5, 9, 0.5, -0.5, 20]);
	}

	render() {
		// 2D 只需要两个坐标轴标识位置
		const vLen = Math.floor(this.vertex.length / this.vSize); //几个点
		const offset = 0;// 从数据第几位开始偏移
		const normalLize = false;

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

		this.gl.uniform1f(this.getUniformLocation("size"), this.size);
		this.gl.uniform4fv(this.getUniformLocation("color"), this.color);

		// 渲染
		if (this.vertex.length)
			this.gl.drawArrays(this.gl[this.drawType], 0, vLen);
	}
}
export default Point;