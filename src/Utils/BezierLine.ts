import {getVectorLength, subVector, Vector2} from './vector';
class BezierLine {
	v0: Vector2;
	v1: Vector2;
	v2: Vector2;
	v3: Vector2;
	lengths: number[];

	setControl(v0:Vector2, v1: Vector2, v2:Vector2, v3:Vector2) {
		this.v0 = v0;
		this.v1 = v1;
		this.v2 = v2;
		this.v3 = v3;
	}

	getPoint(t:number) {
		const {v0, v1, v2, v3} = this;
		return {
			x: this.cubicBezier(t, v0.x, v1.x, v2.x, v3.x),
			y: this.cubicBezier(t, v0.y, v1.y, v2.y, v3.y)
		};
	}

	cubicBezier(t:number, p0:number, p1:number, p2:number, p3:number) {
		return CubicBezierP0(t, p0) + CubicBezierP1(t, p1) + CubicBezierP2(t, p2) +
			CubicBezierP3(t, p3);
	}

	/**
	 * @param n 指定点的个数
	 * @returns 
	 */
	getSpacedPoints(n:number):Vector2[] {
		const points = [];
		this.lengths = this.getLengths(n);// 缓存起来
		for (let i = 0;i <= n;i++) {
			const t = this.getUtoTmapping(i / n);
			points.push(this.getPoint(t));
		}
		return points;
	}

	/**
	 * 返回缓存长度数组
	 * @param n 分割点的个数
	 * @returns 
	 */
	getLengths(n = 100):number[] {
		let length = 0;
		const lengths = [0];
		for (let i = 1;i <= n;i++) {
			const current = this.getPoint(i / n);
			const last = this.getPoint((i - 1) / n);
			length += getVectorLength(subVector(last, current));
			lengths.push(length);
		}
		return lengths;
	}

	/**
	 * 获取线总长度
	 * @param n 
	 * @returns 
	 */
	getLength(n):number {
		const lengths = this.getLengths(n);
		return lengths[lengths.length - 1];
	}

	// TODO: 根据总长度算出一定比例的长度所对应的t值，
	// 这个等距划分的算法不知道为何在贝塞尔中间的部分间距过大不再等距，有空再看下吧
	getUtoTmapping(u:number):number {
		const lengths = this.lengths;
		const length = lengths[lengths.length - 1];
		const targetLength = u * length;
		let nextIndex; let nowIndex = 0;
		lengths.find((item, index)=>{
			if (item >= targetLength) {
				nextIndex = index;
				return true;
			} else {
				nowIndex = index;
				return false;
			}
		});
		const restRatio = u === 0 ? 0 : (targetLength - lengths[nowIndex]) / (lengths[nextIndex] - lengths[nowIndex]);
		const t = (nowIndex + Math.max(restRatio, 0)) / (this.lengths.length - 1);
		return t;
	}
}

function CubicBezierP0(t:number, p:number) {

	const k = 1 - t;
	return k * k * k * p;

}

function CubicBezierP1(t:number, p:number) {

	const k = 1 - t;
	return 3 * k * k * t * p;

}

function CubicBezierP2(t:number, p:number) {

	return 3 * (1 - t) * t * t * p;

}

function CubicBezierP3(t:number, p:number) {

	return t * t * t * p;

}

export default BezierLine;
