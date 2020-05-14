import pointShader from '../Shaders/point';
import Base from './Base';

class Point extends Base {
	drawType = "POINTS";
	shaders = {
		vertex: pointShader.vertexShader,
		fragment: pointShader.fragmentShader
	}
	vertex = [];
	offset = 0;
	vSize = 2;
	constructor(config) {
		super(config);
		this.initShader();
		this.init();
	}

	setData(data, color, size) {
		this.vertex = data;
		this.setBufferData(data, "position", 2);
		this.setBufferData(color, "color", 4);
		this.setBufferData(size, "size", 1);
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

		// 渲染
		if (this.vertex.length)
			this.gl.drawArrays(this.gl[this.drawType], this.offset, vLen);
	}
}
export default Point;