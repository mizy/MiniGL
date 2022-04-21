import Line from './Line.js';
import LinePoint from './LinePoint';
class RoundLine {
    constructor(config) {
        this.depthMask = true;
        this.depthTest = true;
        this.transparent = true;
        this.line = new Line(config);
        this.linePoint = new LinePoint(config);
    }
    onAdd(miniGL) {
        this.line.onAdd(miniGL);
        this.linePoint.onAdd(miniGL);
    }
    setData(data) {
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
