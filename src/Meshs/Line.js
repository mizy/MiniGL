import lineShader from '../Shaders/line';
import Base from './Base';

class Line extends Base {
	drawType = "LINES";
	shaders = {
		vertex: lineShader.vertexShader,
		fragment: lineShader.fragmentShader
	}
	offset=0;

	constructor(config) {
		config = Object.assign({
			z:0.1
		},config)
		super(config);
		this.initShader();
		this.init();
	}
	

	init() {
		// this.setData([0, 0, 0.5, 0, 0.5, 0, 0.5, 0.5]);
	}

	setData(data) {
		const {config:{
			miniGL:{viewport}
		}} = this;
		const points = [];
		this.data = data;
		data.forEach(item=>{
			const coord = viewport.convertScreenToClip(item.x,item.y);
			points.push(coord.x,coord.y)
		})

		this.vertex = points;
		this.setBufferData(points, "position", 2)
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
		this.gl.uniform1f(this.getUniformLocation("z"), this.config.z);
		// 加载shader程序
		this.gl.useProgram(this.shaderPorgram);

		// 渲染
		if (this.vertex.length) {
			this.gl.drawArrays(this.gl[this.drawType], this.offset, vLen);
		}
	}
}
export default Line;