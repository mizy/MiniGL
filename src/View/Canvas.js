
import Mesh from '../Meshs/Mesh';
import Point from '../Meshs/Point';
import Line from '../Meshs/Line';
/**
 * @class
 */
class Canvas {
	constructor(config) {
		this.gl = config.miniGL;
		this.mesh = new Mesh(config);
		this.point = new Point(config);
		this.line = new Line(config);
	}

	clear() {

	}

	toDataUrl() {
		return this.gl.canvas.toDataUrl();
	}

	update() {
		this.render();
		requestAnimationFrame(() => {
			this.update();
		});
	}

	render() {
		// 清空
		this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
		this.gl.clearDepth(1.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.depthFunc(this.gl.LEQUAL)
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		this.mesh.render();
		this.point.render();
		this.line.render();
	}
}
export default Canvas