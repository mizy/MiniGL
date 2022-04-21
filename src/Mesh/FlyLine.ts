import lineShader from '../Shaders/flyline';
import Base from './BaseMesh';
import BezierLine from '../Utils/BezierLine';
import {normalize, addVector, getVectorLength, subVector, multiple } from '../Utils/vector';

class Line extends Base {
	drawType = 'LINE_STRIP';
	shaders = {
		vertex: lineShader.vertexShader,
		fragment: lineShader.fragmentShader
	}
	offset=0;
	depthMask=false;
	bezierLine: BezierLine;
	data: {
		startXY?: { x: number, y: number },//clip坐标
		endXY?: { x: number, y: number },//clip坐标
		start: {
			x: number; y: number;
		}; end: {
			x: number; y: number;
		};
	};
	startFlag: boolean;
	constructor(config) {
		super();
		config = Object.assign({
			z: 0.1,
			length: 50,
			lineHeight: 0.2,
			speed: 1,
			smoothNumber: 1
		}, config);
		this.init(config);
		this.bezierLine = new BezierLine();
		this.uniformData = {
			t: {
				value: 0,
				type: 'uniform1f'
			},
			length: {
				value: config.length,
				type: 'uniform1f'
			},
			startColor: {
				value: config.startColor || [1, 0, 0, 0],
				type: 'uniform4fv'
			},
			endColor: {
				value: config.endColor || [1, 0, 0, 1],
				type: 'uniform4fv'
			},
			z: {
				value: this.config.z,
				type: 'uniform1f'
			}
		};
	}

	setData(data: {
		start: { x: number, y: number },
		end: { x: number, y: number },
	}) {
		const {
			miniGL: {viewport}
		} = this;
		this.data = data;
		this.data.startXY = viewport.convertScreenToClip(data.start.x, data.start.y);
		this.data.endXY = viewport.convertScreenToClip(data.end.x, data.end.y);
		const midPoint = {
			x: this.data.start.x / 2 + this.data.end.x / 2,
			y: this.data.start.y / 2 + this.data.end.y / 2
		};
		const end_start = {
			x: this.data.end.x - this.data.start.x,
			y: this.data.end.y - this.data.start.y
		};
		let normal = {
			x: end_start.y,
			y: -end_start.x
		};
		if (end_start.x < 0) {
			normal = {
				x: -end_start.y,
				y: end_start.x
			};
		}

		const length = getVectorLength(subVector(data.end, data.start));

		const lineHeight = this.config.lineHeight * length;
		const controlPoint = addVector(multiple(normalize(normal), lineHeight), midPoint);
		this.bezierLine.setControl(this.data.start, this.data.start, controlPoint, this.data.end);

		const allPoints = this.bezierLine.getSpacedPoints(length * this.config.smoothNumber);
		const points = [];const numbers = [];

		allPoints.forEach((item, index)=>{
			// 最后再近些坐标转换，避免因为画布缩放导致长度计算失准
			const point = viewport.convertScreenToClip(item.x, item.y);
			points.push(point.x, point.y);
			numbers.push(index);
		});
		this.vertex = points;

		// this.pointsBufferLength = points.length*Float32Array.BYTES_PER_ELEMENT;
		this.setBufferData(points, 'position', 2);
		this.setBufferData(numbers, 'number', 1);
	}

	start() {
		this.startFlag = true;
	}

	pause() {
		this.startFlag = false;
	}

	render() {
		// 2D 只需要两个坐标轴标识位置
		const normalize = false;
		const length = this.vertex.length / 2;
		const {uniformData = {}, config} = this;
		if (!this.startFlag) return;

		uniformData.t.value += this.config.speed;
		if (uniformData.t.value >= length) {
			uniformData.t.value = -this.config.length;
		}

		// 分别绑定数据到shader程序中
		for (let key in this.buffers) {
			const bufferData = this.buffers[key];
			const bufferPosition = this.getAttribLocation(key);
			// 分别绑定数据到shader程序中
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
			this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, 0);
			this.gl.enableVertexAttribArray(bufferPosition);
		}

		// 加载shader程序
		this.gl.useProgram(this.shaderProgram);
		this.setUniformData();

		// 渲染
		if (this.vertex.length) {
			// specifying the starting index in the array of vector points.
			// specifying the number of indices to be rendered.
			const offset = Math.max(uniformData.t.value as number, 0);
			// 起步时要算出真实的减掉负数的size，到达时，不能超过整个数组长度
			const size = Math.min((uniformData.t.value + config.length) - offset, length - offset);
			if (size === 0) return;
			this.gl.drawArrays(this.gl[this.drawType], offset, size);
		}
	}
}
export default Line;
