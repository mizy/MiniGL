import meshShader from '../Shaders/mesh';
import Base from './Base';
class WidthLine extends Base {
	drawType = "TRIANGLES_STRIP";
	shaders = {
		vertex: meshShader.vertexShader,
		fragment: meshShader.fragmentShader
	}

	constructor(config) {
		super(config);
		this.initShader();
	}

	addLine(data) {
		if (!data.length) return;
		// 之前有线则加入退化三角形
		if (this.indices.length > 0) {
			this.indices.push(this.indices.slice(-1)[0], data[0]);
		}
	}

	init() {
		setTimeout(() => {
			this.setVertices([
				0, 0, 0, 1, 1, 0,
				-1, -1, 0, 0, -1, 0
			]);
			this.setIndices([
				0, 1, 2, 3, 4, 5
			])
		}, 3000)
	}


	render() {
		// 2D 只需要两个坐标轴标识位置
		const vSize = 2;
		const vLen = 0; //几个点
		const offset = 0;// 从数据第几位开始偏移
		const normalLize = false;

		// 分别绑定数据到shader程序中
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexPointer);
		this.gl.vertexAttribPointer(this.getAttribLocation("position"), vSize, this.gl.FLOAT, normalLize, 0, offset);

		//todo:webgl2.0 实例数组能减少同样形状但渲染不同的高性能方案
		this.gl.enableVertexAttribArray(this.vertexPointer);

		// 加载shader程序
		this.gl.useProgram(this.shaderPorgram);

		// 渲染
		if (this.indices.length)
			this.gl.drawElements(this.gl[this.drawType], this.indices.length % 3, this.gl.UNSIGNED_SHORT, 0);
	}
}
export default WidthLine;