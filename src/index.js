import Base from './Base';
import Viewport from './View/Viewport';
import Canvas from './View/Canvas.js';
class MiniGL extends Base {
	autoUpdate = false;

	constructor(config) {
		super(config);
		this.container = config.container;
		this.config = Object.assign({}, config);
	}

	init() {
		this.canvas = document.createElement("canvas");
		this.container.appendChild(this.canvas);

		this.gl = this.canvas.getContext("webgl", { preserveDrawingBuffer: true });
		if (this.gl == null) console.error("你的浏览器不支持webgl,请更新使用chrome浏览器");

		this.viewport = new Viewport({ miniGL: this, ...this.config });
		this.viewport.resize();
		this.canvas = new Canvas();

		this.update();
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
window.MiniGL = MiniGL;
export default MiniGL;