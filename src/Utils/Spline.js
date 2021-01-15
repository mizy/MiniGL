// 顺滑度函数
function CatmullRom(t, p0, p1, p2, p3) {

	var v0 = (p2 - p0) * 0.5;
	var v1 = (p3 - p1) * 0.5;
	var t2 = t * t;
	var t3 = t * t2;
	return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

}

class Spline {
	setData(data) {
		this.data = data;
	}
	getPoint(t) {
		const length = this.data.length;
		const num = Math.floor(t * (length - 1));
		const restT = t - num;
		const p0 = num === 0 ? this.data[num] : this.data[num - 1];
		const p1 = this.data[num];
		const p2 = this.data[ num > this.data.length - 2 ? this.data.length - 1 : intPoint + 1 ];
		const p3 = this.data[ num > this.data.length - 3 ? this.data.length - 1 : intPoint + 2 ];
		return {
			x: CatmullRom(restT, p0.x, p1.x, p2.x, p3.x),
			y: CatmullRom(restT, p0.y, p1.y, p2.y, p3.y)
		};
	}

	getSpacedPoints(n) {
		const points = [];
		for (let i = 0;i < n - 1;i++) {
			points.push(this.getPoint(i / n));
		}
		points.push(this.getPoint(1));
		return points;
	}
}
export default Spline;
