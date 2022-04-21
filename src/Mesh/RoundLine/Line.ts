import shader from '@/Shaders/roundLine.js';
import Base, { BaseMeshConfig } from '../BaseMesh';
import { PointData } from '../Mesh';
class RoundLine extends Base {
	drawType = "TRIANGLES"//"TRIANGLE_STRIP";
	shaders = {
		vertex: shader.vertexShader,
		fragment: shader.fragmentShader
	}
	offset=0;
	data: PointData[];
	res: { preData: any[]; nowData: any[]; nextData: any[]; side: any[]; status: any[]; };

	constructor(config:BaseMeshConfig) {
		super();
		config = Object.assign({
			width:20,
			z:1,
			offset:0,
		},config);
		this.uniformData = {
			z:{
				value:config.z||1,
				type:"uniform1f"
			}
		}
		this.init(config);
	}

	setData(data:PointData[]) {
		const {
			miniGL:{viewport}
		} = this;
		
		if (!data.length && data.length < 2) return console.warn("need input data.length >= 2");
		this.uniformData.transform={
			value:viewport.transform,
			type:"uniformMatrix3fv"
		}
		this.uniformData.aspect = {
			value: viewport.ratio,
			type:"uniform1f"
		}
		this.uniformData.color = {
			value: this.config.color||[1,0,1,1],
			type:"uniform4fv"
		}
		this.uniformData.width = {
			value: 2*this.config.width/this.miniGL.viewport.height,
			type:"uniform1f"
		}
		this.uniformData.offset = {
			value: 2*this.config.offset/this.miniGL.viewport.height,
			type:"uniform1f"
		}
		this.data = data;

		const points = [];
		data.forEach(item=>{
			points.push(item.position.x,item.position.y)
		})

		// 生产双倍点for两个边
		const res = this.calcSidePoints(data)

		this.setBufferData(res.nowData, "now", 2);
		this.setBufferData(res.preData, "pre", 2);
		this.setBufferData(res.nextData, "next", 2);
		this.setBufferData(res.side, "side", 1);
		this.setBufferData(res.status, "status", 1);

		// 生成顶点
		const indices = [];
		for (let j = 0;j < data.length - 1;j++) {
			const n = j * 4;
			indices.push(
				n, n + 1, n + 2,
				n + 2, n + 1, n + 3
			);
		}
		this.setIndices(indices)
		this.res = res;
	}

	calcSidePoints(data = []) {
		const length = data.length;
		let side = [];
		let nextData = [];
		let preData = [];
		let nowData = [];
		let status = [];

 		// 生产双倍点for两个边
		for (let i = 0; i < length-1; i ++) {
			let point1 = data[i].position;
			let point0 = data[i - 1]?data[i-1].position: {x: 2 * data[i].position.x - data[i + 1].position.x, y: 2 * data[i].position.y - data[i + 1].position.y};
			let point2 = data[i + 1]?data[i+1].position: {x: 2 * data[i].position.x - data[i - 1].position.x, y: 2 * data[i].position.y - data[i - 1].position.y};
			side.push(1, -1);
			preData.push(
				point0.x, point0.y,
				point0.x, point0.y
			);
			nowData.push(
				point1.x, point1.y,
				point1.x, point1.y
			);
			nextData.push(
				point2.x, point2.y, 
				point2.x, point2.y
			);
			const j = i + 1;
			point1 = data[j].position;
			point0 = data[j - 1] ?data[j-1].position: {x: 2 * data[j].position.x - data[j + 1].position.x, y: 2 * data[j].position.y - data[j + 1].position.y};
			point2 = data[j + 1] ?data[j+1].position: {x: 2 * data[j].position.x - data[j - 1].position.x, y: 2 * data[j].position.y - data[j - 1].position.y};
			side.push(1, -1);
			preData.push(
				point0.x, point0.y,
				point0.x, point0.y
			);
			nowData.push(
				point1.x, point1.y,
				point1.x, point1.y
			);
			nextData.push(
				point2.x, point2.y, 
				point2.x, point2.y
			);
			status.push(0, 0, 1, 1);
		}
	 
		return {
			preData,
			nowData,
			nextData,
			side,
			status,
		}
	}
 
	render() {
		// 2D 只需要两个坐标轴标识位置
		const offset = 0;// 从数据第几位开始偏移
		const normalize = false;

		for (let key in this.buffers) {
			const bufferData = this.buffers[key];
			const bufferPosition = this.getAttribLocation(key);
			// 分别绑定数据到shader程序中
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
			this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);

			//todo:webgl2.0 实例数组能减少同样形状但渲染不同的高性能方案
			this.gl.enableVertexAttribArray(bufferPosition);
		}

		// 使用顶点数据
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);

		// 加载shader程序
		this.gl.useProgram(this.shaderProgram);

		this.setUniformData();

		// 渲染
		if (this.indices.length){
			this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);

		}
	}
}
export default RoundLine;