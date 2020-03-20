import meshShader from '../Shaders/mesh';
import Base from './Base';
class Mesh extends Base {
	drawType = "TRIANGLES";
	shaders = {
		vertex: meshShader.vertexShader,
		fragment: meshShader.fragmentShader
	}

	constructor(config) {
		super(config);
		this.vSize = 2;
		this.initShader();
		this.init()
	}

	init() {
		// this.setData(
		// 	[
		// 		0, 0,
		// 		0, -0.5,
		// 		-0.5, 0,
		// 		-0.5, -0.5,
		// 	],
		// 	[0, 1, 2, 2, 1, 3]
		// )

	}

	setData(data, indices) {
		this.vertex = data;
		this.setBufferData(data, "position", 2);
		this.setIndices(indices)
	}

	render() {
		// 2D 只需要两个坐标轴标识位置
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

		// 使用顶点数据
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);

		// 加载shader程序
		this.gl.useProgram(this.shaderPorgram);

		// 渲染
		if (this.indices.length)
			this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, 0);
	}
}
export default Mesh;