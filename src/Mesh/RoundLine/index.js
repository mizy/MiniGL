import Line from './Line.js';
import LinePoint from './LinePoint';

class RoundLine {
	depthMask = true;
	depthTest = true;
	transparent = true;
	constructor(config) {
		this.line = new Line(config);
		this.linePoint = new LinePoint(config);
	}

	onAdd() {
		this.line.onAdd(...arguments);
		this.linePoint.onAdd(...arguments);
	}

	setData() {
		this.line.setData(...arguments);
		this.linePoint.setData(this.line.res);
	}

	dispose() {
		this.line.dispose(...arguments);
		this.linePoint.dispose(...arguments);
	}

	destroy() {
		this.line.destroy(...arguments);
		this.linePoint.destroy(...arguments);
	}

	render() {
		this.linePoint.render(...arguments);
		this.line.render(...arguments);
	}
}
export default RoundLine;
