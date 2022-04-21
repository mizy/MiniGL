import MiniGL from '@/index.js';
import { PointData } from '../Mesh.js';
import Line from './Line.js';
import LinePoint from './LinePoint';

class RoundLine {
	depthMask = true;
	depthTest = true;
	transparent = true;
	line: Line;
	linePoint: LinePoint;
	constructor(config) {
		this.line = new Line(config);
		this.linePoint = new LinePoint(config);
	}

	onAdd(miniGL: MiniGL) {
		this.line.onAdd(miniGL);
		this.linePoint.onAdd(miniGL);
	}

	setData(data:PointData[]) {
		this.line.setData(data);
		this.linePoint.setData(this.line.res);
	}

	dispose() {
		this.line.dispose();
		this.linePoint.dispose();
	}

	destroy() {
		this.line.destroy();
		this.linePoint.destroy();
	}

	render() {
		this.linePoint.render();
		this.line.render();
	}
}
export default RoundLine;
