import Base from './Base';
import Viewport from './View/Viewport';
import Canvas from './View/Canvas.js';
import FlyLine from './Meshs/FlyLine';
import Mesh from './Meshs/Mesh';
import Image from './Meshs/Image';
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

		this.gl = this.canvas.getContext("webgl", { antialias: true,antialiasSamples: 16,preserveDrawingBuffer: true });
		if (this.gl == null) console.error("你的浏览器不支持webgl,请更新使用chrome浏览器");

		this.viewport = new Viewport({ miniGL: this, ...this.config });
		this.viewport.resize();
		this.canvas = new Canvas({ miniGL: this,...this.config });

		this.canvas.update();
	}
}
MiniGL.FlyLine = FlyLine;
MiniGL.Image = Image;
MiniGL.Mesh = Mesh;
export default MiniGL;