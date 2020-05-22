import lineShader from '../Shaders/line';
import Base from './Base';

class Line extends Base {
	drawType = "LINE_STRIP";
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
		this.init(config);
		this.uniformData = {
			z:{
				value:this.config.z,
				type:"uniform1f"
			}
		}
	}
	
	setData(data) {
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
		const {uniformData  = {}} = this;

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

		this.setUniformData();

		// 渲染
		if (this.vertex.length) {
			this.gl.drawArrays(this.gl[this.drawType], this.offset, vLen);
		}
	}
}
export default Line;