import shader from '../Shaders/widthLine';
import Base from './Base';
class WidthLine extends Base {
	drawType = "TRIANGLES"//"TRIANGLE_STRIP";
	shaders = {
		vertex: shader.vertexShader,
		fragment: shader.fragmentShader
	}
	offset;

	constructor(config) {
		config = Object.assign({
			width:20,
			z:1,
		},config)
		super(config);
		this.width = 2*config.width/this.config.miniGL.viewport.height;
		this.initShader();
		this.init();
	}

	setData(data) {
		const {config:{
			miniGL:{viewport}
		}} = this;
		if (!data.length && data.length < 2) return console.warn("need input data.length >= 2");
		
		this.data = data;

		const points = [];
		data.forEach(item=>{
			const coord = viewport.convertScreenToClip(item.x,item.y);
			points.push(coord.x,coord.y)
		})

		// 生产双倍点for两个边
		const res = this.calcSidePoints(points)

		this.setBufferData(res.side, "side", 1);
		this.setBufferData(res.nowData, "now", 2);
		this.setBufferData(res.preData, "pre", 2);
		this.setBufferData(res.nextData, "next", 2);
		// 生成顶点
		const indices = [];
		const indicesLength = res.nowData.length / 2;
		// TRIANGLES情况
		for (let i = 0; i < indicesLength - 2; i += 2) {
			indices.push(i)
			indices.push(i + 1);
			indices.push(i + 2);
			indices.push(i + 2)
			indices.push(i + 1);
			indices.push(i + 3);
		}
		// Strip退化方案太反人类，不hack 了
		// for (let i = 0; i < indicesLength; i++) {
		// 	//012 213 233 336 366 667 678
		// 	// 4 =>3 5=>6 //退化过程
		// 	// data[length - 1], 
		// 	indices.push(i);
		// }
		this.setIndices(indices)
		this.res = res;
	}

	calcSidePoints(data = []) {
		const length = data.length;
		let side = [];
		let nextData = [];
		let preData = [];
		let nowData = [];
		// 生产双倍点for两个边
		for (let i = 0; i < length; i += 2) {
			side.push(1, -1)
			nowData.push(data[i], data[i + 1], data[i], data[i + 1]);
		}
		const next = [2 * data[length - 2] - data[length - 4], 2 * data[length - 1] - data[length - 3]]
		nextData = [
			...nowData,
			...next, ...next
		];
		nextData.splice(0, 4);
		const pre = [2 * data[0] - data[2], 2 * data[1] - data[3]]
		preData = [
			...pre,
			...pre,
			...nowData];
		return {
			nowData,
			preData,
			nowData,
			side,
			nextData
		}
	}

	/**
	 * 添加数据
	 * @param  {} data
	 */
	addData(data) {
		if (data.length < 4) return;
		const { indices = [], res } = this;

		// 之前有线则加入退化三角形
		if (indices.length === 0) {
			return this.setData(data)
		}
		// 退化
		const addRes = this.calcSidePoints(data);
		// 加入数据的点数量
		const indicesLength = addRes.nowData.length / 2;
		// 原来的点总数
		const lastIndex = res.nowData.length / 2;
		// 序号从总点数开始，小于新总点数-2
		for (let i = lastIndex; i < (lastIndex + indicesLength - 2); i += 2) {
			indices.push(i)
			indices.push(i + 1);
			indices.push(i + 2);
			indices.push(i + 2)
			indices.push(i + 1);
			indices.push(i + 3);
		}
		res.nowData = [...res.nowData, ...addRes.nowData];
		res.side = [...res.side, ...addRes.side];
		res.preData = [...res.preData, ...addRes.preData];
		res.nextData = [...res.nextData, ...addRes.nextData];

		this.setBufferData(res.side, "side", 1);
		this.setBufferData(res.nowData, "now", 2);
		this.setBufferData(res.preData, "pre", 2);
		this.setBufferData(res.nextData, "next", 2);
		this.setIndices(indices);
		this.res = res;
	}

	init() {
		// this.setData([
		// 	0, 0,
		// 	0.5, 0,
		// 	0.5, 0.5,
		// ]);
		// setTimeout(() => {
		// 	this.addData([
		// 		0, 0.5,
		// 		-0.5, 0.5
		// 	])
		// }, 1000)
	}

	render() {
		// 2D 只需要两个坐标轴标识位置
		const vSize = 2;
		const vLen = 0; //几个点
		const offset = 0;// 从数据第几位开始偏移
		const normalLize = false;

		for (let key in this.buffers) {
			const bufferData = this.buffers[key];
			const bufferPosition = this.getAttribLocation(key);
			// 分别绑定数据到shader程序中
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
			this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalLize, 0, offset);

			//todo:webgl2.0 实例数组能减少同样形状但渲染不同的高性能方案
			this.gl.enableVertexAttribArray(bufferPosition);
		}

		// 使用顶点数据
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);

		// 加载shader程序
		this.gl.useProgram(this.shaderPorgram);

		this.gl.uniform1f(this.getUniformLocation("width"), this.width);
		this.gl.uniform1f(this.getUniformLocation("z"), this.config.z);
		// 不要在shader里进行坐标换算，一次性的事儿，外界转换好就行
		this.gl.uniform1f(this.getUniformLocation("aspect"), this.config.miniGL.viewport.ratio);
		// this.gl.uniform4fv(this.getUniformLocation("color"), false, [0.0, 1.0, 1.0, 1.0]);

		// 渲染
		if (this.indices.length)
			this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
	}
}
export default WidthLine;