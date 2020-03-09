import pointShader from '../Shaders/point';
import Base from './Base';

class Point extends Base {
	drawType = "POINTS";
	shaders = {
		vertex: pointShader.vertexShader,
		fragment: pointShader.fragmentShader
	}

	constructor(config) {
		super(config);
		this.initShader();
		this.init();
	}

	init() {
		// this.setVertices([0.5,0.5,10,-0.5,0.5,5,-0.5,-0.5,9,0.5,-0.5,20]);
	}

	render() {
		// 2D 只需要两个坐标轴标识位置
		const vSize = 3;
		const vLen = Math.floor(this.vertex.length / 3); //几个点
		const offset = 0;// 从数据第几位开始偏移
		const normalLize = false;

		// 分别绑定数据到shader程序中
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexPointer);
		this.gl.vertexAttribPointer(this.getAttribLocation("position"), vSize, this.gl.FLOAT, normalLize, 0, offset);
		this.gl.enableVertexAttribArray(this.vertexPointer);

		// 加载shader程序
		this.gl.useProgram(this.shaderPorgram);

		// 渲染
		if (this.vertex.length)
			this.gl.drawArrays(this.gl[this.drawType], 0, vLen);
	}
}
export default Point;