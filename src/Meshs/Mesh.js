import meshShader from '../Shaders/mesh';
import Base from './Base';
class Mesh extends Base {
	drawType = "TRIANGLES";
	shaders = {
		vertex: meshShader.vertexShader,
		fragment: meshShader.fragmentShader
	}
	offset=0;//array.BYTES_PER_ELEMENT * indicesEachLength

	constructor(config) {
		super(config);
		this.init(config);
		this.vSize = 2;
	}

	setData(data, indices) {
		const {
			miniGL:{viewport}
		} = this;
		const points = [];
		this.data = data;
		data.forEach(item=>{
			const coord = viewport.convertScreenToClip(item.position.x,item.position.y);
			points.push(coord.x,coord.y)
		})
		this.vertex = points;
		this.setBufferData(points, "position", 2);
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

		this.setUniformData();

		// 渲染
		if (this.indices.length)
		// offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的BYTES_PER_ELEMENT
			this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
	}
}
export default Mesh;